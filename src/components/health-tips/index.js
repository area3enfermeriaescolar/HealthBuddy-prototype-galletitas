// index.js - Archivo de exportación para el sistema de galletitas de salud

// Exportaciones principales
export { 
    DailyHealthTip,
    FavoritesPanel,
    useHealthTips,
    getTipOfTheDay,
    healthTips
  } from './HealthTipsSystem';
  
  // Exportación por defecto
  export { default } from './HealthTipsSystem';
  
  // Exportaciones adicionales para utilidades
  export const healthTipUtils = {
    // Función para obtener tips por categoría
    getTipsByCategory: (category) => {
      const { healthTips } = require('./HealthTipsSystem');
      return healthTips[category] || [];
    },
  
    // Función para obtener tips por estado de ánimo
    getTipsByMood: (mood) => {
      const { healthTips } = require('./HealthTipsSystem');
      const allTips = Object.values(healthTips).flat();
      return allTips.filter(tip => 
        tip.mood.includes('all') || tip.mood.includes(mood)
      );
    },
  
    // Función para obtener tips por estación
    getTipsBySeason: (season) => {
      const { healthTips } = require('./HealthTipsSystem');
      const allTips = Object.values(healthTips).flat();
      return allTips.filter(tip => 
        tip.season === 'all' || 
        tip.season === season || 
        (Array.isArray(tip.season) && tip.season.includes(season))
      );
    },
  
    // Función para obtener estadísticas de tips
    getTipStats: () => {
      const { healthTips } = require('./HealthTipsSystem');
      const allTips = Object.values(healthTips).flat();
      
      return {
        total: allTips.length,
        byCategory: Object.keys(healthTips).reduce((acc, category) => {
          acc[category] = healthTips[category].length;
          return acc;
        }, {}),
        totalPoints: allTips.reduce((sum, tip) => sum + tip.points, 0),
        averagePoints: Math.round(allTips.reduce((sum, tip) => sum + tip.points, 0) / allTips.length)
      };
    },
  
    // Función para validar estructura de tip
    validateTip: (tip) => {
      const requiredFields = ['id', 'title', 'content', 'icon', 'category', 'mood', 'season', 'points'];
      const missingFields = requiredFields.filter(field => !tip.hasOwnProperty(field));
      
      if (missingFields.length > 0) {
        return {
          valid: false,
          errors: [`Campos faltantes: ${missingFields.join(', ')}`]
        };
      }
  
      const errors = [];
      
      // Validar tipos
      if (typeof tip.title !== 'string' || tip.title.length === 0) {
        errors.push('El título debe ser una cadena no vacía');
      }
      
      if (typeof tip.content !== 'string' || tip.content.length === 0) {
        errors.push('El contenido debe ser una cadena no vacía');
      }
      
      if (typeof tip.points !== 'number' || tip.points <= 0) {
        errors.push('Los puntos deben ser un número positivo');
      }
      
      if (!Array.isArray(tip.mood)) {
        errors.push('mood debe ser un array');
      }
  
      return {
        valid: errors.length === 0,
        errors
      };
    }
  };
  
  // Constantes útiles
  export const HEALTH_TIP_CATEGORIES = [
    'nutrition',
    'mentalHealth', 
    'exercise',
    'sleep',
    'hygiene',
    'sexuality',
    'toxicHabits',
    'safety'
  ];
  
  export const MOOD_OPTIONS = [
    'sad',
    'regular', 
    'normal',
    'good',
    'great'
  ];
  
  export const SEASON_OPTIONS = [
    'spring',
    'summer',
    'autumn', 
    'winter'
  ];
  
  export const CATEGORY_COLORS = {
    'Nutrición': '#4CAF50',
    'Salud Mental': '#9C27B0',
    'Ejercicio': '#FF9800',
    'Sueño': '#3F51B5',
    'Higiene': '#00BCD4',
    'Sexualidad': '#E91E63',
    'Hábitos Tóxicos': '#F44336',
    'Prevención Accidentes': '#FF5722'
  };
  
  // Configuración por defecto
  export const DEFAULT_CONFIG = {
    showOnStartup: true,
    autoClose: false,
    autoCloseDelay: 5000,
    enableAnimations: true,
    enableSound: false,
    persistFavorites: true,
    maxFavorites: 50,
    pointsMultiplier: 1
  };
  
  // Eventos personalizados para integración
  export const HEALTH_TIP_EVENTS = {
    TIP_VIEWED: 'healthtip:viewed',
    TIP_FAVORITED: 'healthtip:favorited',
    TIP_UNFAVORITED: 'healthtip:unfavorited',
    TIP_SHARED: 'healthtip:shared',
    LEVEL_UP: 'healthtip:levelup',
    ACHIEVEMENT_UNLOCKED: 'healthtip:achievement'
  };
  
  // Hook para emitir eventos personalizados
  export const useHealthTipEvents = () => {
    const emit = (eventName, data) => {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
      }
    };
  
    return { emit };
  };
  
  // Función para inicializar el sistema
  export const initHealthTips = (config = {}) => {
    const finalConfig = { ...DEFAULT_CONFIG, ...config };
    
    // Inicializar localStorage si no existe
    if (typeof window !== 'undefined' && !localStorage.getItem('healthTipsStats')) {
      const initialStats = {
        totalPoints: 0,
        streakDays: 0,
        tipsRead: 0,
        favoriteCount: 0,
        achievements: [],
        lastReadDate: null,
        favorites: [],
        config: finalConfig
      };
      
      localStorage.setItem('healthTipsStats', JSON.stringify(initialStats));
    }
    
    return finalConfig;
  };
  
  // Versión del sistema
  export const VERSION = '1.0.0';