import { useState, useEffect, createContext } from 'react';
import Header from './Header';
import Content from './Content';
import logoSvg from './assets/logo_title.svg?raw';

export const MainColor = createContext();

function App() {
  const mainColors = ['#ffee00', '#F333FF'];
  const [actualColor, setActualColor] = useState(mainColors[0]);

  
  useEffect(() => {
    const coloredSvg = logoSvg.replace(/currentColor/g, actualColor);
    const url = `data:image/svg+xml;base64,${btoa(coloredSvg)}`;

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = url;
  }, [actualColor]);

  const setColor = (number) => {
    if (number >= 0 && number < mainColors.length) {
      setActualColor(mainColors[number]);
    }
  };

  return (
    <MainColor.Provider value={{ actualColor, setColor }}>
      <Header />
      <Content />
    </MainColor.Provider>
  );
}

export default App;
