import { useState, useEffect } from 'react';

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);

    // Cleanup para remover o event listener quando o componente desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default useMobile;