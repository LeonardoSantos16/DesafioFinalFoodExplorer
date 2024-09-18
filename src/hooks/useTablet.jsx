import { useState, useEffect } from 'react';

export const useTablet = () => {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    // Cleanup para remover o event listener quando o componente desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isTablet;
};

export default useTablet;