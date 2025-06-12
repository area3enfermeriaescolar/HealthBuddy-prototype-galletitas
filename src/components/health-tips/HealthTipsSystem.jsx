import React, { useState, useEffect } from 'react';
import { X, Lightbulb, Heart, Brain, Apple, Dumbbell, Moon, Shield, Eye, Users, Star, StarOff, MessageCircle, Trophy, Calendar, BarChart3, TrendingUp } from 'lucide-react';

/**
 * Sistema Avanzado de Galletitas de Salud para HealthBuddy
 * 🎨 Con colores oficiales: Turquesa (#5ECCC3) y Azul Marino (#1E5F8C)
 * ✨ Con personalización, favoritos, gamificación y analytics
 */

// Colores oficiales de HealthBuddy
const HEALTHBUDDY_COLORS = {
  primary: '#5ECCC3',      // Turquesa principal
  secondary: '#1E5F8C',    // Azul marino
  primaryLight: '#7DD3D8', // Turquesa claro
  secondaryLight: '#2E6F9C', // Azul marino claro
  success: '#4CAF50',      // Verde éxito
  warning: '#FF9800',      // Naranja advertencia
  error: '#F44336',        // Rojo error
  textDark: '#333333',     // Texto oscuro
  textMedium: '#666666',   // Texto medio
  textLight: '#999999',    // Texto claro
  lightBg: '#F8FFFE',      // Fondo muy claro
  white: '#FFFFFF'         // Blanco puro
};

// Base de datos completa de galletitas organizadas por categorías
const healthTips = {
  nutrition: [
    {
      id: 'nut_001',
      title: "Hidratación inteligente",
      content: "¿Sabías que necesitas beber unos 8 vasos de agua al día? Tu cerebro es 75% agua, ¡manténlo hidratado para pensar mejor!",
      icon: "💧",
      category: "Nutrición",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 5
    },
    {
      id: 'nut_002',
      title: "El poder de los colores",
      content: "Come frutas y verduras de diferentes colores cada día. Cada color aporta nutrientes únicos que tu cuerpo necesita.",
      icon: "🌈",
      category: "Nutrición",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 5
    },
    {
      id: 'nut_003',
      title: "Desayuno energético",
      content: "Un buen desayuno mejora tu concentración hasta 4 horas. Incluye proteínas, carbohidratos y algo de fruta.",
      icon: "🥞",
      category: "Nutrición",
      mood: ['regular', 'normal', 'good'],
      season: 'all',
      points: 5
    },
    {
      id: 'nut_004',
      title: "Vitamina D en invierno",
      content: "En invierno, incluye pescados grasos, huevos y lácteos para obtener vitamina D cuando hay menos sol.",
      icon: "🐟",
      category: "Nutrición",
      mood: ['all'],
      season: 'winter',
      points: 5
    },
    {
      id: 'nut_005',
      title: "Hidratación en verano",
      content: "En verano necesitas más agua. Añade rodajas de limón o menta para hacer el agua más apetecible.",
      icon: "🍋",
      category: "Nutrición",
      mood: ['all'],
      season: 'summer',
      points: 5
    }
  ],
  mentalHealth: [
    {
      id: 'men_001',
      title: "Respira y relájate",
      content: "Cuando te sientas estresado, prueba la técnica 4-7-8: inhala 4 segundos, mantén 7, exhala 8. ¡Funciona!",
      icon: "🫁",
      category: "Salud Mental",
      mood: ['sad', 'regular'],
      season: 'all',
      points: 10
    },
    {
      id: 'men_002',
      title: "El poder de la gratitud",
      content: "Escribir 3 cosas por las que estás agradecido cada día puede mejorar tu estado de ánimo en solo una semana.",
      icon: "📝",
      category: "Salud Mental",
      mood: ['sad', 'regular', 'normal'],
      season: 'all',
      points: 10
    },
    {
      id: 'men_003',
      title: "Conexiones sociales",
      content: "Hablar con amigos o familia 10 minutos al día reduce el estrés y fortalece tu bienestar emocional.",
      icon: "👥",
      category: "Salud Mental",
      mood: ['sad', 'regular'],
      season: 'all',
      points: 10
    },
    {
      id: 'men_004',
      title: "Combate la tristeza invernal",
      content: "Si te sientes decaído en invierno, busca luz natural por las mañanas. Solo 15 minutos pueden mejorar tu ánimo.",
      icon: "☀️",
      category: "Salud Mental",
      mood: ['sad', 'regular'],
      season: 'winter',
      points: 15
    },
    {
      id: 'men_005',
      title: "Descanso mental",
      content: "Tu mente necesita descansos. Dedica 5 minutos cada hora a cerrar los ojos y respirar profundo.",
      icon: "🧘",
      category: "Salud Mental",
      mood: ['regular', 'normal'],
      season: 'all',
      points: 10
    }
  ],
  exercise: [
    {
      id: 'exe_001',
      title: "Movimiento diario",
      content: "Solo 30 minutos de actividad física al día pueden mejorar tu humor y energía. ¡Bailar cuenta!",
      icon: "💃",
      category: "Ejercicio",
      mood: ['sad', 'regular', 'normal'],
      season: 'all',
      points: 8
    },
    {
      id: 'exe_002',
      title: "Ejercicio de verano",
      content: "En verano, haz ejercicio temprano en la mañana o al atardecer para evitar el calor excesivo.",
      icon: "🌅",
      category: "Ejercicio",
      mood: ['all'],
      season: 'summer',
      points: 8
    },
    {
      id: 'exe_003',
      title: "Escaleras vs ascensor",
      content: "Subir escaleras quema 10 veces más calorías que caminar en llano. Tu corazón te lo agradecerá.",
      icon: "🪜",
      category: "Ejercicio",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 8
    },
    {
      id: 'exe_004',
      title: "Ejercicio en invierno",
      content: "No dejes que el frío te pare. 20 minutos de ejercicio en casa pueden ser tan efectivos como en el gimnasio.",
      icon: "🏠",
      category: "Ejercicio",
      mood: ['all'],
      season: 'winter',
      points: 8
    }
  ],
  sleep: [
    {
      id: 'sle_001',
      title: "Ritual nocturno",
      content: "Apaga las pantallas 1 hora antes de dormir. La luz azul puede interrumpir tu ciclo natural del sueño.",
      icon: "📱",
      category: "Sueño",
      mood: ['all'],
      season: 'all',
      points: 7
    },
    {
      id: 'sle_002',
      title: "Temperatura ideal",
      content: "Duermes mejor en una habitación fresca (18-20°C). Tu cuerpo necesita bajar su temperatura para conciliar el sueño.",
      icon: "🌡️",
      category: "Sueño",
      mood: ['all'],
      season: 'all',
      points: 7
    },
    {
      id: 'sle_003',
      title: "Rutina de sueño",
      content: "Acostarte y levantarte a la misma hora, incluso en fines de semana, mejora la calidad de tu sueño.",
      icon: "⏰",
      category: "Sueño",
      mood: ['all'],
      season: 'all',
      points: 7
    },
    {
      id: 'sle_004',
      title: "Sueño en verano",
      content: "En noches calurosas, usa ropa de cama ligera y mantén los pies frescos para dormir mejor.",
      icon: "🌙",
      category: "Sueño",
      mood: ['all'],
      season: 'summer',
      points: 7
    }
  ],
  hygiene: [
    {
      id: 'hyg_001',
      title: "Lavado de manos eficaz",
      content: "Lávate las manos durante 20 segundos (el tiempo de cantar 'Cumpleaños feliz' dos veces). ¡Previene el 80% de infecciones!",
      icon: "👐",
      category: "Higiene",
      mood: ['all'],
      season: 'all',
      points: 5
    },
    {
      id: 'hyg_002',
      title: "Cuidado dental",
      content: "Cepíllate los dientes en círculos suaves durante 2 minutos. Las bacterias bucales pueden afectar tu corazón.",
      icon: "🦷",
      category: "Higiene",
      mood: ['all'],
      season: 'all',
      points: 5
    },
    {
      id: 'hyg_003',
      title: "Protección solar",
      content: "Usa protector solar SPF 30+ incluso en días nublados. Los rayos UV pueden atravesar las nubes.",
      icon: "☀️",
      category: "Higiene",
      mood: ['all'],
      season: ['spring', 'summer'],
      points: 5
    },
    {
      id: 'hyg_004',
      title: "Higiene en invierno",
      content: "En invierno, hidrata tu piel después de la ducha. El aire seco puede causar irritaciones.",
      icon: "🧴",
      category: "Higiene",
      mood: ['all'],
      season: 'winter',
      points: 5
    }
  ],
  sexuality: [
    {
      id: 'sex_001',
      title: "Información confiable",
      content: "Busca información sobre sexualidad en fuentes médicas confiables. Los mitos y rumores pueden ser peligrosos para tu salud.",
      icon: "📚",
      category: "Sexualidad",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 10
    },
    {
      id: 'sex_002',
      title: "Comunicación abierta",
      content: "Hablar sobre sexualidad con profesionales sanitarios o personas de confianza es normal y saludable. No tengas miedo de preguntar.",
      icon: "🗣️",
      category: "Sexualidad",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 10
    },
    {
      id: 'sex_003',
      title: "Respeto y consentimiento",
      content: "En cualquier relación, el respeto mutuo y el consentimiento son fundamentales. 'No' siempre significa 'no'.",
      icon: "🤝",
      category: "Sexualidad",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 10
    },
    {
      id: 'sex_004',
      title: "Protección siempre",
      content: "Los métodos anticonceptivos no solo previenen embarazos, también protegen contra infecciones de transmisión sexual.",
      icon: "🛡️",
      category: "Sexualidad",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 10
    },
    {
      id: 'sex_005',
      title: "Tu cuerpo, tus decisiones",
      content: "Conocer tu cuerpo y sus cambios es importante. No hay prisa en las decisiones sobre sexualidad, tómate tu tiempo.",
      icon: "⏳",
      category: "Sexualidad",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 10
    }
  ],
  toxicHabits: [
    {
      id: 'tox_001',
      title: "Redes sociales saludables",
      content: "Limita el tiempo en redes sociales a 2 horas diarias. El uso excesivo puede afectar tu autoestima y sueño.",
      icon: "📱",
      category: "Hábitos Tóxicos",
      mood: ['sad', 'regular'],
      season: 'all',
      points: 12
    },
    {
      id: 'tox_002',
      title: "El tabaco y tu cerebro",
      content: "Fumar en la adolescencia puede afectar permanentemente el desarrollo cerebral. Tu cerebro no termina de desarrollarse hasta los 25 años.",
      icon: "🚭",
      category: "Hábitos Tóxicos",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 12
    },
    {
      id: 'tox_003',
      title: "Alcohol: datos reales",
      content: "El alcohol afecta más a los adolescentes que a los adultos. Puede interferir con la memoria y el aprendizaje durante días.",
      icon: "🚫",
      category: "Hábitos Tóxicos",
      mood: ['normal', 'good', 'great'],
      season: 'all',
      points: 12
    },
    {
      id: 'tox_004',
      title: "Presión de grupo",
      content: "Decir 'no' a sustancias nocivas no te hace menos 'cool'. Los verdaderos amigos respetarán tus decisiones.",
      icon: "🛑",
      category: "Hábitos Tóxicos",
      mood: ['regular', 'normal'],
      season: 'all',
      points: 12
    },
    {
      id: 'tox_005',
      title: "Gaming equilibrado",
      content: "Los videojuegos pueden ser divertidos, pero más de 3 horas diarias pueden afectar tu rendimiento escolar y social.",
      icon: "🎮",
      category: "Hábitos Tóxicos",
      mood: ['normal', 'good'],
      season: 'all',
      points: 12
    },
    {
      id: 'tox_006',
      title: "Pide ayuda",
      content: "Si sientes que no puedes controlar un hábito (sustancias, redes, juegos), hablar con un profesional es el primer paso para recuperar el control.",
      icon: "🆘",
      category: "Hábitos Tóxicos",
      mood: ['sad', 'regular'],
      season: 'all',
      points: 15
    }
  ],
  safety: [
    {
      id: 'saf_001',
      title: "Casco siempre",
      content: "Usar casco en bici, patinete o moto reduce el riesgo de lesiones cerebrales graves en un 85%. Tu cerebro es irreemplazable.",
      icon: "🪖",
      category: "Prevención Accidentes",
      mood: ['all'],
      season: 'all',
      points: 8
    },
    {
      id: 'saf_002',
      title: "Cinturón de seguridad",
      content: "Abrocharse el cinturón reduce el riesgo de muerte en un accidente en un 45%. Solo toma 3 segundos que pueden salvarte la vida.",
      icon: "🚗",
      category: "Prevención Accidentes",
      mood: ['all'],
      season: 'all',
      points: 8
    },
    {
      id: 'saf_003',
      title: "Precaución con el móvil",
      content: "Caminar escribiendo mensajes causa 1 de cada 4 accidentes peatonales en adolescentes. Mira siempre antes de cruzar.",
      icon: "🚶",
      category: "Prevención Accidentes",
      mood: ['all'],
      season: 'all',
      points: 8
    },
    {
      id: 'saf_004',
      title: "Deporte seguro",
      content: "Calienta siempre antes del ejercicio intenso. 10 minutos de calentamiento pueden prevenir lesiones que te apartan del deporte semanas.",
      icon: "🏃",
      category: "Prevención Accidentes",
      mood: ['all'],
      season: 'all',
      points: 8
    },
    {
      id: 'saf_005',
      title: "Fiestas seguras",
      content: "Nunca dejes tu bebida sin vigilar en una fiesta y ve siempre acompañado. Informa a alguien de confianza dónde estarás.",
      icon: "🎉",
      category: "Prevención Accidentes",
      mood: ['good', 'great'],
      season: 'all',
      points: 8
    },
    {
      id: 'saf_006',
      title: "Internet seguro",
      content: "No compartas información personal (dirección, horarios, fotos comprometidas) con desconocidos online. La privacidad te protege.",
      icon: "🔒",
      category: "Prevención Accidentes",
      mood: ['all'],
      season: 'all',
      points: 8
    }
  ]
};

// Sistema de gamificación con colores HealthBuddy
const gamificationSystem = {
  levels: [
    { level: 1, name: "Principiante de la Salud", minPoints: 0, maxPoints: 49, color: HEALTHBUDDY_COLORS.success, icon: "🌱" },
    { level: 2, name: "Aprendiz Saludable", minPoints: 50, maxPoints: 149, color: HEALTHBUDDY_COLORS.primary, icon: "📚" },
    { level: 3, name: "Experto en Bienestar", minPoints: 150, maxPoints: 299, color: HEALTHBUDDY_COLORS.warning, icon: "⭐" },
    { level: 4, name: "Maestro de la Salud", minPoints: 300, maxPoints: 499, color: HEALTHBUDDY_COLORS.secondary, icon: "👑" },
    { level: 5, name: "Gurú del Bienestar", minPoints: 500, maxPoints: 999, color: HEALTHBUDDY_COLORS.error, icon: "🏆" }
  ],
  
  achievements: [
    { id: "first_tip", name: "Primera Galletita", description: "Probaste tu primera galletita de salud", icon: "🎯", points: 10 },
    { id: "week_streak", name: "Semana Saludable", description: "7 días consecutivos disfrutando galletitas", icon: "🔥", points: 50 },
    { id: "mood_tracker", name: "Autoconocimiento", description: "Registraste tu estado de ánimo 10 veces", icon: "🎭", points: 30 },
    { id: "category_explorer", name: "Explorador", description: "Probaste galletitas de todas las categorías", icon: "🗺️", points: 75 },
    { id: "tip_sharer", name: "Comunicador", description: "Preguntaste sobre una galletita en el chat", icon: "💬", points: 25 }
  ]
};

// Sistema de analytics simulado
const analyticsData = {
  totalUsers: 1247,
  tipViews: 15634,
  favoritesByCategory: {
    'Salud Mental': 342,
    'Sexualidad': 298,
    'Hábitos Tóxicos': 256,
    'Ejercicio': 223,
    'Nutrición': 198,
    'Prevención Accidentes': 167,
    'Sueño': 145,
    'Higiene': 123
  },
  weeklyEngagement: [
    { day: 'Lun', views: 234, interactions: 45 },
    { day: 'Mar', views: 267, interactions: 52 },
    { day: 'Mié', views: 298, interactions: 61 },
    { day: 'Jue', views: 312, interactions: 58 },
    { day: 'Vie', views: 289, interactions: 67 },
    { day: 'Sáb', views: 156, interactions: 32 },
    { day: 'Dom', views: 178, interactions: 38 }
  ]
};

// Funciones de utilidad
const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'autumn';
  return 'winter';
};

const getPersonalizedTips = (mood, season) => {
  const allTips = Object.values(healthTips).flat();
  return allTips.filter(tip => {
    const moodMatch = tip.mood.includes('all') || tip.mood.includes(mood);
    const seasonMatch = tip.season === 'all' || tip.season === season || 
                       (Array.isArray(tip.season) && tip.season.includes(season));
    return moodMatch && seasonMatch;
  });
};

const getUserLevel = (points) => {
  return gamificationSystem.levels.find(level => 
    points >= level.minPoints && points <= level.maxPoints
  ) || gamificationSystem.levels[0];
};

// Función para obtener la galletita del día basado en la fecha
const getTipOfTheDay = (mood = 'normal', season = getCurrentSeason()) => {
  const personalizedTips = getPersonalizedTips(mood, season);
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  
  if (personalizedTips.length === 0) {
    // Fallback a todos los tips si no hay personalizados
    const allTips = Object.values(healthTips).flat();
    const tipIndex = dayOfYear % allTips.length;
    return allTips[tipIndex];
  }
  
  const tipIndex = dayOfYear % personalizedTips.length;
  return personalizedTips[tipIndex];
};

// Hook personalizado para gestión de galletitas de salud (compatible con Claude.ai)
const useHealthTips = () => {
  const [userStats, setUserStats] = useState({
    totalPoints: 25,
    streakDays: 1,
    tipsRead: 3,
    favoriteCount: 1,
    achievements: ['first_tip'],
    lastReadDate: new Date().toDateString(),
    favorites: ['men_001']
  });

  const [analytics] = useState(analyticsData);

  const addToFavorites = (tipId) => {
    setUserStats(prev => ({
      ...prev,
      favorites: [...prev.favorites, tipId],
      favoriteCount: prev.favoriteCount + 1
    }));
  };

  const removeFromFavorites = (tipId) => {
    setUserStats(prev => ({
      ...prev,
      favorites: prev.favorites.filter(id => id !== tipId),
      favoriteCount: prev.favoriteCount - 1
    }));
  };

  const markTipAsRead = (tip) => {
    const today = new Date().toDateString();
    const isNewDay = userStats.lastReadDate !== today;
    
    setUserStats(prev => ({
      ...prev,
      totalPoints: prev.totalPoints + tip.points,
      tipsRead: prev.tipsRead + 1,
      streakDays: isNewDay ? prev.streakDays + 1 : prev.streakDays,
      lastReadDate: today
    }));
  };

  return {
    userStats,
    analytics,
    addToFavorites,
    removeFromFavorites,
    markTipAsRead
  };
};

// Componente de galletita de salud diaria avanzada con colores HealthBuddy
const DailyHealthTip = ({ onClose, isVisible = true, userMood = 'normal' }) => {
  const { userStats, addToFavorites, removeFromFavorites, markTipAsRead } = useHealthTips();
  const [tip, setTip] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showChatPrompt, setShowChatPrompt] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const currentTip = getTipOfTheDay(userMood, getCurrentSeason());
      setTip(currentTip);
      setIsAnimating(true);
      
      if (currentTip) {
        markTipAsRead(currentTip);
      }
    }
  }, [isVisible, userMood]);

  if (!isVisible || !tip) return null;

  const isFavorite = userStats.favorites.includes(tip.id);
  const userLevel = getUserLevel(userStats.totalPoints);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeFromFavorites(tip.id);
    } else {
      addToFavorites(tip.id);
    }
  };

  const handleAskAboutTip = () => {
    setShowChatPrompt(true);
    // Aquí se integraría con el sistema de chat
    setTimeout(() => {
      setShowChatPrompt(false);
      handleClose();
    }, 2000);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Nutrición': HEALTHBUDDY_COLORS.success,
      'Salud Mental': HEALTHBUDDY_COLORS.secondary,
      'Ejercicio': HEALTHBUDDY_COLORS.warning,
      'Sueño': HEALTHBUDDY_COLORS.secondary,
      'Higiene': HEALTHBUDDY_COLORS.primary,
      'Sexualidad': HEALTHBUDDY_COLORS.error,
      'Hábitos Tóxicos': HEALTHBUDDY_COLORS.error,
      'Prevención Accidentes': HEALTHBUDDY_COLORS.warning
    };
    return colors[category] || HEALTHBUDDY_COLORS.primary;
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
        opacity: isAnimating ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
      onClick={handleClose}
    >
      <div
        style={{
          background: `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.white} 0%, ${HEALTHBUDDY_COLORS.lightBg} 100%)`,
          borderRadius: '24px',
          padding: '28px',
          maxWidth: '440px',
          width: '100%',
          boxShadow: `
            0 25px 50px -12px rgba(30, 95, 140, 0.25),
            0 0 0 1px rgba(94, 204, 195, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.6)
          `,
          transform: isAnimating ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Efectos decorativos */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200%',
            height: '200%',
            background: `radial-gradient(circle, ${HEALTHBUDDY_COLORS.primary}15 0%, transparent 70%)`,
            pointerEvents: 'none'
          }}
        />

        {/* Header con gradiente HealthBuddy */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '20px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              background: `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.primary} 0%, ${HEALTHBUDDY_COLORS.primaryLight} 100%)`,
              borderRadius: '16px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 8px 16px ${HEALTHBUDDY_COLORS.primary}30`
            }}>
              <Lightbulb size={24} color={HEALTHBUDDY_COLORS.white} />
            </div>
            <div>
              <h3 style={{ 
                margin: 0, 
                background: `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.primary} 0%, ${HEALTHBUDDY_COLORS.secondary} 100%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '20px',
                fontWeight: '700'
              }}>
                🍪 Galletita del día
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <span style={{ 
                  fontSize: '12px', 
                  color: userLevel.color,
                  fontWeight: '600'
                }}>
                  {userLevel.icon} {userLevel.name}
                </span>
                <span style={{ 
                  fontSize: '12px', 
                  color: HEALTHBUDDY_COLORS.textMedium,
                  background: HEALTHBUDDY_COLORS.lightBg,
                  padding: '2px 6px',
                  borderRadius: '8px'
                }}>
                  +{tip.points} puntos
                </span>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleClose}
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: `1px solid ${HEALTHBUDDY_COLORS.primary}30`,
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: HEALTHBUDDY_COLORS.textMedium,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = HEALTHBUDDY_COLORS.primary;
              e.target.style.color = HEALTHBUDDY_COLORS.white;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.8)';
              e.target.style.color = HEALTHBUDDY_COLORS.textMedium;
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Progreso de puntos con efectos glassmorphism */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(20px)',
          borderRadius: '16px',
          padding: '16px',
          marginBottom: '20px',
          border: `1px solid rgba(255, 255, 255, 0.3)`
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '10px' 
          }}>
            <span style={{ 
              fontSize: '12px', 
              color: HEALTHBUDDY_COLORS.textDark,
              fontWeight: '600'
            }}>
              Progreso de nivel
            </span>
            <span style={{ 
              fontSize: '12px', 
              color: HEALTHBUDDY_COLORS.textMedium,
              fontWeight: '500'
            }}>
              {userStats.totalPoints} / {userLevel.maxPoints + 1} puntos
            </span>
          </div>
          <div style={{
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            height: '8px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{
              background: `linear-gradient(90deg, ${HEALTHBUDDY_COLORS.primary} 0%, ${HEALTHBUDDY_COLORS.secondary} 100%)`,
              height: '100%',
              width: `${Math.min(100, (userStats.totalPoints - userLevel.minPoints) / (userLevel.maxPoints - userLevel.minPoints + 1) * 100)}%`,
              transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              borderRadius: '10px',
              boxShadow: `0 2px 8px ${HEALTHBUDDY_COLORS.primary}40`
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                animation: 'shimmer 2s infinite'
              }} />
            </div>
          </div>
        </div>

        {/* Category Badge con gradiente */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          background: `linear-gradient(135deg, ${getCategoryColor(tip.category)} 0%, ${getCategoryColor(tip.category)}CC 100%)`,
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '600',
          marginBottom: '20px',
          boxShadow: `0 4px 12px ${getCategoryColor(tip.category)}40`,
          textShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}>
          {tip.category}
        </div>

        {/* Tip Content */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ 
            fontSize: '52px', 
            marginBottom: '16px',
            lineHeight: 1,
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
            animation: isAnimating ? 'bounce 2s infinite' : 'none'
          }}>
            {tip.icon}
          </div>
          
          <h4 style={{ 
            margin: '0 0 16px 0', 
            color: HEALTHBUDDY_COLORS.textDark,
            fontSize: '22px',
            fontWeight: '700',
            lineHeight: '1.3'
          }}>
            {tip.title}
          </h4>
          
          <p style={{ 
            margin: 0, 
            color: HEALTHBUDDY_COLORS.textMedium,
            fontSize: '16px',
            lineHeight: '1.6',
            letterSpacing: '0.3px'
          }}>
            {tip.content}
          </p>
        </div>

        {/* Acciones con efectos hover */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '20px'
        }}>
          <button
            onClick={handleFavoriteToggle}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: isFavorite 
                ? `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.warning} 0%, #FFB74D 100%)` 
                : 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              color: isFavorite ? HEALTHBUDDY_COLORS.white : HEALTHBUDDY_COLORS.textMedium,
              border: `1px solid ${isFavorite ? HEALTHBUDDY_COLORS.warning : 'rgba(255, 255, 255, 0.3)'}`,
              borderRadius: '14px',
              padding: '14px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isFavorite ? `0 6px 20px ${HEALTHBUDDY_COLORS.warning}30` : '0 2px 8px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = isFavorite 
                ? `0 8px 25px ${HEALTHBUDDY_COLORS.warning}40` 
                : '0 4px 12px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = isFavorite 
                ? `0 6px 20px ${HEALTHBUDDY_COLORS.warning}30` 
                : '0 2px 8px rgba(0,0,0,0.1)';
            }}
          >
            {isFavorite ? <Star size={16} fill="currentColor" /> : <StarOff size={16} />}
            {isFavorite ? 'Guardado' : 'Guardar'}
          </button>

          <button
            onClick={handleAskAboutTip}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.primary} 0%, ${HEALTHBUDDY_COLORS.secondary} 100%)`,
              color: HEALTHBUDDY_COLORS.white,
              border: 'none',
              borderRadius: '14px',
              padding: '14px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: `0 6px 20px ${HEALTHBUDDY_COLORS.primary}30`,
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = `0 8px 25px ${HEALTHBUDDY_COLORS.primary}40`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = `0 6px 20px ${HEALTHBUDDY_COLORS.primary}30`;
            }}
          >
            <MessageCircle size={16} />
            Preguntar
          </button>
        </div>

        {/* Chat prompt con efectos */}
        {showChatPrompt && (
          <div style={{
            background: `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.lightBg} 0%, rgba(94, 204, 195, 0.1) 100%)`,
            border: `2px solid ${HEALTHBUDDY_COLORS.primary}`,
            borderRadius: '16px',
            padding: '16px',
            marginBottom: '20px',
            animation: 'slideIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{ 
              margin: 0, 
              fontSize: '14px', 
              color: HEALTHBUDDY_COLORS.secondary,
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '18px' }}>💬</span>
              Pregunta enviada al chat. La enfermera escolar responderá pronto sobre tu galletita.
            </p>
          </div>
        )}

        {/* Footer con estadísticas */}
        <div style={{
          borderTop: `1px solid rgba(94, 204, 195, 0.2)`,
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '18px', 
                fontWeight: '700', 
                color: HEALTHBUDDY_COLORS.primary,
                textShadow: `0 2px 4px ${HEALTHBUDDY_COLORS.primary}20`
              }}>
                {userStats.streakDays}
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: HEALTHBUDDY_COLORS.textMedium,
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                días seguidos
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '18px', 
                fontWeight: '700', 
                color: HEALTHBUDDY_COLORS.secondary,
                textShadow: `0 2px 4px ${HEALTHBUDDY_COLORS.secondary}20`
              }}>
                {userStats.tipsRead}
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: HEALTHBUDDY_COLORS.textMedium,
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                galletitas probadas
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '18px', 
                fontWeight: '700', 
                color: HEALTHBUDDY_COLORS.warning,
                textShadow: `0 2px 4px ${HEALTHBUDDY_COLORS.warning}20`
              }}>
                {userStats.favoriteCount}
              </div>
              <div style={{ 
                fontSize: '10px', 
                color: HEALTHBUDDY_COLORS.textMedium,
                fontWeight: '500',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                favoritas
              </div>
            </div>
          </div>
          
          <button
            onClick={handleClose}
            style={{
              background: `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.primary} 0%, ${HEALTHBUDDY_COLORS.primaryLight} 100%)`,
              color: HEALTHBUDDY_COLORS.white,
              border: 'none',
              borderRadius: '12px',
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: `0 4px 12px ${HEALTHBUDDY_COLORS.primary}30`,
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = `0 6px 16px ${HEALTHBUDDY_COLORS.primary}40`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = `0 4px 12px ${HEALTHBUDDY_COLORS.primary}30`;
            }}
          >
            ¡Entendido! ✨
          </button>
        </div>

        {/* Estilos de animación integrados */}
        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @media (max-width: 480px) {
            div {
              margin: 16px !important;
              padding: 24px !important;
              max-width: calc(100vw - 32px) !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            * {
              animation: none !important;
              transition: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

// Componente de panel de favoritos con colores HealthBuddy
const FavoritesPanel = ({ favorites, allTips, onClose }) => {
  const favoriteTips = allTips.filter(tip => favorites.includes(tip.id));

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }}>
      <div style={{
        background: `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.white} 0%, ${HEALTHBUDDY_COLORS.lightBg} 100%)`,
        borderRadius: '20px',
        padding: '24px',
        maxWidth: '500px',
        width: '100%',
        maxHeight: '70vh',
        overflow: 'auto',
        boxShadow: `0 25px 50px -12px rgba(30, 95, 140, 0.25)`
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '20px' 
        }}>
          <h3 style={{ 
            margin: 0, 
            background: `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.primary} 0%, ${HEALTHBUDDY_COLORS.secondary} 100%)`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '20px',
            fontWeight: '700'
          }}>
            🍪 Galletitas Favoritas
          </h3>
          <button 
            onClick={onClose} 
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              color: HEALTHBUDDY_COLORS.textMedium,
              padding: '8px',
              borderRadius: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = HEALTHBUDDY_COLORS.lightBg;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
            }}
          >
            <X size={20} />
          </button>
        </div>

        {favoriteTips.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: HEALTHBUDDY_COLORS.lightBg,
            borderRadius: '16px',
            border: `2px dashed ${HEALTHBUDDY_COLORS.primary}40`
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🍪</div>
            <p style={{ 
              color: HEALTHBUDDY_COLORS.textMedium, 
              margin: 0,
              fontSize: '16px',
              lineHeight: '1.5'
            }}>
              Aún no tienes galletitas favoritas.<br />
              ¡Empieza a guardar las que más te gusten!
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {favoriteTips.map(tip => (
              <div key={tip.id} style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${HEALTHBUDDY_COLORS.primary}20`,
                borderRadius: '16px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'all 0.2s ease'
              }}>
                <div style={{ 
                  fontSize: '28px',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}>
                  {tip.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    margin: '0 0 4px 0', 
                    fontSize: '16px',
                    color: HEALTHBUDDY_COLORS.textDark,
                    fontWeight: '600'
                  }}>
                    {tip.title}
                  </h4>
                  <p style={{ 
                    margin: '0 0 6px 0', 
                    fontSize: '14px', 
                    color: HEALTHBUDDY_COLORS.textMedium,
                    lineHeight: '1.4'
                  }}>
                    {tip.content}
                  </p>
                  <span style={{ 
                    fontSize: '12px', 
                    color: HEALTHBUDDY_COLORS.primary,
                    background: `${HEALTHBUDDY_COLORS.primary}15`,
                    padding: '2px 8px',
                    borderRadius: '8px',
                    fontWeight: '500'
                  }}>
                    {tip.category}
                  </span>
                </div>
                <div style={{
                  background: `linear-gradient(135deg, ${HEALTHBUDDY_COLORS.warning} 0%, #FFB74D 100%)`,
                  color: HEALTHBUDDY_COLORS.white,
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 8px ${HEALTHBUDDY_COLORS.warning}30`
                }}>
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Exportar componentes principales
export { DailyHealthTip, FavoritesPanel, useHealthTips, getTipOfTheDay, healthTips, HEALTHBUDDY_COLORS };
export default DailyHealthTip;