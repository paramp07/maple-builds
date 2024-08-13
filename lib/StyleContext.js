// context/StyleContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const router = useRouter();
  const [backgroundImage, setBackgroundImage] = useState(null); // Default to no image

  useEffect(() => {
    if (router.pathname === '/about') {
      setBackgroundImage('https://bat-cms-media.s3.eu-central-1.amazonaws.com/images/2023/11/1498_en-u16house-hero-2-Real.jpg');
    } else if (router.pathname === '/contact') {
      setBackgroundImage('https://bat-cms-media.s3.eu-central-1.amazonaws.com/images/2023/06/338_es-hbh-hero-Real.jpg');
    } else {
      setBackgroundImage(null); // Default to no image for other routes
    }
  }, [router.pathname]);

  return (
    <StyleContext.Provider value={{ backgroundImage }}>
      {children}
    </StyleContext.Provider>
  );
};

export const useStyle = () => useContext(StyleContext);
