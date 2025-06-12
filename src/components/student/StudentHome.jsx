// StudentHome.jsx - Versión con Galletitas de Salud integradas
import React, { useState } from 'react';
import { useTheme } from '../ThemeProvider';
import {
  DemoBadge,
  NavBar,
  Card,
  Button,
  Badge,
  Alert,
  Container
} from "../common/CommonComponents";

// NUEVO: Importar el sistema de galletitas
import { DailyHealthTip } from '../health-tips';

/**
 * StudentHome - Vista de inicio para estudiantes con Galletitas de Salud
 */
function StudentHome({ onNavigate }) {
  const theme = useTheme();
  
  // Estados existentes
  const [mood, setMood] = useState(null);
  
  // NUEVO: Estados para galletitas de salud
  const [showDailyTip, setShowDailyTip] = useState(false); // No mostrar por defecto
  const [hasSeenTodaysTip, setHasSeenTodaysTip] = useState(true); // Ya se mostró al inicio de sesión
  
  // NUEVO: Estado para sugerencia de chat con enfermera
  const [showNurseChat, setShowNurseChat] = useState(false);
  
  // Opciones de estado de ánimo (existente)
  const moods = [
    { id: 'sad', emoji: '😔', label: 'Triste' },
    { id: 'regular', emoji: '🙁', label: 'Regular' },
    { id: 'normal', emoji: '😐', label: 'Normal' },
    { id: 'good', emoji: '🙂', label: 'Bien' },
    { id: 'great', emoji: '😊', label: 'Genial' },
  ];
  
  // Determinar si el estado de ánimo es negativo (existente)
  const isNegative = mood === 'sad' || mood === 'regular';

  // Datos de consulta joven (existente)
  const consultaJovenInfo = {
    enfermera: "Lucía Martínez",
    horario: "Martes y Jueves, 10:00 - 11:00",
    lugar: "Sala 12, junto a Orientación",
  };

  // NUEVO: Función para manejar el cierre de la galletita
  const handleCloseTip = () => {
    setShowDailyTip(false);
    setHasSeenTodaysTip(true);
  };

  // NUEVO: Función para mostrar galletita manualmente
  const showHealthTip = () => {
    setShowDailyTip(true);
  };

  // NUEVO: Agregar estilos CSS para la animación
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInSlide {
        0% {
          opacity: 0;
          transform: translateY(-10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Container>
      <DemoBadge />
      
      {/* ---------- Tarjeta SALUDO + HUMOR ---------- */}
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: theme.spacing.md }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: theme.borderRadius.round,
              backgroundColor: theme.colors.lightBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              marginRight: theme.spacing.md,
            }}
          >
            👤
          </div>
          <div>
            <h2 style={{ margin: 0, color: theme.colors.textDark }}>¡Hola, Carlos!</h2>
            <p style={{ margin: 0, color: theme.colors.textMedium }}>¿Cómo te sientes hoy?</p>
          </div>
        </div>

        {/* Selector de estado de ánimo */}
        <div
          style={{
            backgroundColor: theme.colors.lightBg,
            borderRadius: theme.borderRadius.xl,
            padding: theme.spacing.md,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {moods.map((m) => {
            const selected = mood === m.id;
            return (
              <div
                key={m.id}
                onClick={() => {
                  setMood(m.id);
                  // Mostrar sugerencia de chat inmediatamente si el humor es negativo
                  if (m.id === 'sad' || m.id === 'regular') {
                    setShowNurseChat(true);
                  } else {
                    setShowNurseChat(false);
                  }
                }}
                style={{
                  flex: 1,
                  textAlign: 'center',
                  cursor: 'pointer',
                  padding: '0.4rem 0',
                  borderRadius: theme.borderRadius.lg,
                  border: selected ? `3px solid ${theme.colors.primary}` : '3px solid transparent',
                  backgroundColor: selected ? 'rgba(0,183,216,0.12)' : 'transparent',
                  transition: theme.transitions.default,
                }}
              >
                <div style={{ fontSize: '1.6rem' }}>{m.emoji}</div>
                <div style={{ 
                  fontSize: theme.typography.fontSize.sm, 
                  color: theme.colors.textMedium, 
                  marginTop: 4 
                }}>
                  {m.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* NUEVO: Flash de sugerencia para chat con enfermera (estado negativo) */}
        {showNurseChat && isNegative && (
          <div
            style={{
              backgroundColor: '#E3F2FD',
              borderRadius: theme.borderRadius.xl,
              padding: theme.spacing.md,
              marginTop: theme.spacing.md,
              border: '2px solid #2196F3',
              position: 'relative',
              animation: 'fadeInSlide 0.5s ease-out'
            }}
          >
            <button
              onClick={() => setShowNurseChat(false)}
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                background: 'transparent',
                border: 'none',
                fontSize: '18px',
                color: '#1976D2',
                cursor: 'pointer',
                padding: 0,
                width: 24,
                height: 24,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '2rem' }}>💙</div>
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0, color: '#1976D2', fontSize: '16px' }}>
                  Entendemos cómo te sientes
                </h4>
                <p style={{ margin: '4px 0 12px 0', fontSize: '14px', color: '#0D47A1' }}>
                  ¿Te gustaría hablar con la enfermera? Tu privacidad está 100% garantizada.
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button
                    variant="outline"
                    onClick={() => setShowNurseChat(false)}
                    style={{
                      flex: 1,
                      fontSize: '14px',
                      padding: '8px 12px',
                      backgroundColor: 'white',
                      color: '#1976D2',
                      border: '1px solid #1976D2'
                    }}
                  >
                    Ahora no
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => onNavigate('chat')}
                    style={{
                      flex: 1,
                      fontSize: '14px',
                      padding: '8px 12px',
                      backgroundColor: '#1976D2',
                      border: 'none'
                    }}
                  >
                    💬 Hablar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NUEVO: Tarjeta promocional de galletitas de salud */}
        {!showDailyTip && !hasSeenTodaysTip && (
          <div
            style={{
              backgroundColor: '#FFF3E0',
              borderRadius: theme.borderRadius.xl,
              padding: theme.spacing.md,
              marginTop: theme.spacing.md,
              border: '2px solid #FFB74D',
              cursor: 'pointer'
            }}
            onClick={showHealthTip}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ fontSize: '2rem' }}>🍪</div>
                <div>
                  <h4 style={{ margin: 0, color: '#E65100', fontSize: '16px' }}>
                    ¿Quieres ver tu galletita de salud de hoy?
                  </h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#BF360C' }}>
                    Toca aquí para revisarla nuevamente
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                style={{
                  backgroundColor: '#FF9800',
                  color: 'white',
                  border: 'none',
                  fontSize: '12px',
                  padding: '6px 12px'
                }}
              >
                Ver
              </Button>
            </div>
          </div>
        )}

        {/* NUEVO: Botón para ver galletita si ya la vio */}
        {hasSeenTodaysTip && (
          <Button
            variant="outline"
            onClick={showHealthTip}
            style={{
              marginTop: theme.spacing.md,
              backgroundColor: '#FFF3E0',
              color: '#E65100',
              border: '1px solid #FFB74D',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            🍪 Ver galletita de hoy otra vez
          </Button>
        )}

        {/* Información de Consulta Joven (existente) */}
        <div
          style={{
            backgroundColor: theme.colors.lightBg,
            borderRadius: theme.borderRadius.xl,
            padding: theme.spacing.md,
            marginTop: theme.spacing.md,
            borderLeft: `4px solid ${theme.colors.primary}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: theme.borderRadius.round,
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                marginRight: theme.spacing.md,
                color: theme.colors.primary,
              }}
            >
              👩‍⚕️
            </div>
            <div>
              <h3 style={{ 
                margin: 0, 
                color: theme.colors.primary, 
                fontSize: theme.typography.fontSize.md,
                fontWeight: theme.typography.fontWeight.semibold,
              }}>
                Consulta Joven
              </h3>
              <div style={{ 
                fontSize: theme.typography.fontSize.sm, 
                color: theme.colors.textMedium, 
                marginTop: 6 
              }}>
                <p style={{ margin: '4px 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: 8, fontSize: '0.9rem' }}>👤</span>
                  <strong>Enfermera:</strong> {consultaJovenInfo.enfermera}
                </p>
                <p style={{ margin: '4px 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: 8, fontSize: '0.9rem' }}>⏰</span>
                  <strong>Horario:</strong> {consultaJovenInfo.horario}
                </p>
                <p style={{ margin: '4px 0', display: 'flex', alignItems: 'center' }}>
                  <span style={{ marginRight: 8, fontSize: '0.9rem' }}>📍</span>
                  <strong>Ubicación:</strong> {consultaJovenInfo.lugar}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* ---------- Tarjeta EMPATÍA (solo si el humor es negativo) ---------- */}
      {isNegative && !showNurseChat && (
        <Card>
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: theme.borderRadius.round,
                backgroundColor: theme.colors.lightBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                marginRight: theme.spacing.md,
              }}
            >
              💙
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, color: theme.colors.primary }}>Entendemos cómo te sientes</h3>
              <p style={{ marginTop: 6, color: theme.colors.textMedium }}>
                Todos tenemos días difíciles. ¿Te gustaría hablar con la enfermera? Tu privacidad está 100% garantizada.
              </p>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: theme.spacing.sm, 
            marginTop: theme.spacing.md 
          }}>
            <Button 
              variant="outline" 
              onClick={() => setMood(null)} 
              fullWidth
            >
              Ahora no
            </Button>
            <Button 
              variant="primary" 
              onClick={() => onNavigate('chat')} 
              fullWidth
              icon="💬"
            >
              Hablar
            </Button>
          </div>
        </Card>
      )}

      {/* ---------- Tarjeta PRÓXIMA CONSULTA ---------- */}
      <Card border highlight={theme.colors.cardBorder}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: theme.spacing.sm 
        }}>
          <span style={{ fontSize: '1.4rem', marginRight: 8 }}>📅</span>
          <h3 style={{ margin: 0, color: theme.colors.textDark }}>Próxima consulta</h3>
        </div>

        <p style={{ 
          margin: 0, 
          color: theme.colors.primary, 
          fontWeight: theme.typography.fontWeight.semibold 
        }}>
          Martes 15/04
        </p>
        
        <div
          style={{
            backgroundColor: theme.colors.lightBg,
            borderRadius: theme.borderRadius.lg,
            padding: '0.6rem 0.8rem',
            marginTop: 8,
            marginBottom: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            color: theme.colors.textDark,
          }}
        >
          ⏰ 10:30 • Consulta general
        </div>
        
        <Badge type="success" size="small">Confirmada</Badge>

        <Button 
          variant="outline" 
          onClick={() => onNavigate('appointments')} 
          fullWidth
          style={{ marginTop: theme.spacing.md }}
        >
          Ver detalles
        </Button>
      </Card>

      {/* ---------- Tarjeta CHAT ---------- */}
      <Card>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: theme.spacing.sm 
        }}>
          <span style={{ fontSize: '1.4rem', marginRight: 8 }}>💬</span>
          <h3 style={{ margin: 0, color: theme.colors.textDark }}>Chat con tu enfermera Escolar</h3>
        </div>

        <div
          style={{
            backgroundColor: theme.colors.lightBg,
            borderRadius: theme.borderRadius.lg,
            padding: theme.spacing.sm,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: theme.spacing.md,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '2rem' }}>👩‍⚕️</span>
            <div>
              <p style={{ 
                margin: 0, 
                fontWeight: theme.typography.fontWeight.semibold 
              }}>
                {consultaJovenInfo.enfermera}
              </p>
              <p style={{ 
                margin: 0, 
                fontSize: theme.typography.fontSize.sm, 
                color: theme.colors.textMedium 
              }}>
                Enfermera Escolar
              </p>
            </div>
          </div>
          <span
            style={{
              backgroundColor: '#E9214F',
              color: '#fff',
              borderRadius: theme.borderRadius.round,
              width: 28,
              height: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: theme.typography.fontWeight.semibold,
            }}
          >
            2
          </span>
        </div>

        <Button 
          variant="primary" 
          onClick={() => onNavigate('chat')} 
          fullWidth
        >
          Enviar mensaje →
        </Button>
      </Card>

      {/* ---------- Barra inferior de navegación ---------- */}
      <NavBar active="home" onNavigate={onNavigate} userType="student" />

      {/* NUEVO: Componente de galletitas de salud */}
      <DailyHealthTip 
        isVisible={showDailyTip} 
        onClose={handleCloseTip}
        userMood={mood || 'normal'}
      />
    </Container>
  );
}

export default StudentHome;