import React, { createContext, useContext, useState, useEffect } from 'react';

const HealthTipsContext = createContext();

export const useHealthTipsContext = () => {
  const context = useContext(HealthTipsContext);
  if (!context) {
    throw new Error('useHealthTipsContext must be used within HealthTipsProvider');
  }
  return context;
};

export const HealthTipsProvider = ({ children }) => {
  const [userStats, setUserStats] = useState(() => {
    // Cargar desde localStorage si existe
    try {
      const saved = localStorage.getItem('healthTipsStats');
      return saved ? JSON.parse(saved) : {
        totalPoints: 0,
        streakDays: 0,
        tipsRead: 0,
        favoriteCount: 0,
        achievements: [],
        lastReadDate: null,
        favorites: [],
        settings: {
          showOnStartup: true,
          enableAnimations: true,
          enableSound: false
        }
      };
    } catch (error) {
      console.warn('Error loading health tips stats from localStorage:', error);
      return {
        totalPoints: 0,
        streakDays: 0,
        tipsRead: 0,
        favoriteCount: 0,
        achievements: [],
        lastReadDate: null,
        favorites: [],
        settings: {
          showOnStartup: true,
          enableAnimations: true,
          enableSound: false
        }
      };
    }
  });

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    try {
      localStorage.setItem('healthTipsStats', JSON.stringify(userStats));
    } catch (error) {
      console.warn('Error saving health tips stats to localStorage:', error);
    }
  }, [userStats]);

  const updateStats = (newStats) => {
    setUserStats(prev => ({ ...prev, ...newStats }));
  };

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

  const unlockAchievement = (achievementId, points = 0) => {
    setUserStats(prev => {
      if (prev.achievements.includes(achievementId)) {
        return prev; // Ya desbloqueado
      }
      
      return {
        ...prev,
        achievements: [...prev.achievements, achievementId],
        totalPoints: prev.totalPoints + points
      };
    });
  };

  const updateSettings = (newSettings) => {
    setUserStats(prev => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings }
    }));
  };

  const resetStats = () => {
    const initialStats = {
      totalPoints: 0,
      streakDays: 0,
      tipsRead: 0,
      favoriteCount: 0,
      achievements: [],
      lastReadDate: null,
      favorites: [],
      settings: {
        showOnStartup: true,
        enableAnimations: true,
        enableSound: false
      }
    };
    setUserStats(initialStats);
    localStorage.setItem('healthTipsStats', JSON.stringify(initialStats));
  };

  const value = {
    userStats,
    updateStats,
    addToFavorites,
    removeFromFavorites,
    markTipAsRead,
    unlockAchievement,
    updateSettings,
    resetStats
  };

  return (
    <HealthTipsContext.Provider value={value}>
      {children}
    </HealthTipsContext.Provider>
  );
};

export default HealthTipsContext;