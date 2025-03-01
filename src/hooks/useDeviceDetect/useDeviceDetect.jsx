import React, { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Отслеживаем изменение размера экрана
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    // Непременно удаляем обработчик, чтобы предотвратить утечку памяти
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile };
};

export default useDeviceDetect;