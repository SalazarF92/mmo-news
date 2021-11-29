import React, { useState } from 'react';

const themeColor = {
  light: '#bdb8ac',
  dark: '#212832',
};

const themeSecondary = {
  light: '#99968e',
  dark: '#212832',
};

const headerColor = {
  light: 'linear-gradient(180deg, #575550, #73706a, #99968e, #bdb8ac)',
  dark: 'linear-gradient(180deg, #050608, #0d1014, #171c24, #212832)',
};

const inputColor = {
  light: 'linear-gradient(180deg, #575550 -120.56%,#73706a, #99968e -120.52%, #bdb8ac 46.17%)',
  dark: 'linear-gradient(180deg, #323944 -120.56%, #323944 -120.52%, #29323e 46.17%, #222a35 220%)',
};

const themeCard = {
  light: '#e0cf9f',
  dark: '#141920',
};

const textColor = {
  light: '#000',
  dark: '#FFF',
};

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeColor.dark);
  const [themeCards, setThemeCards] = useState(themeCard.dark);
  const [textTheme, setTextTheme] = useState(textColor.dark);
  const [headerTheme, setHeaderTheme] = useState(headerColor.dark);
  const [inputTheme, setInputTheme] = useState(themeColor.dark);
  const [theme2, setTheme2] = useState(themeSecondary.dark);

  const toggleTheme = () => {
    setTheme(theme === themeColor.light ? themeColor.dark : themeColor.light);
    setThemeCards(themeCards === themeCard.light ? themeCard.dark : themeCard.light);
    setTextTheme(textTheme === textColor.light ? textColor.dark : textColor.light);
    setHeaderTheme(headerTheme === headerColor.dark ? headerColor.light : headerColor.dark);
    setInputTheme(inputTheme === inputColor.light ? inputColor.dark : inputColor.light);
    setTheme2(theme2 === themeSecondary.light ? themeSecondary.dark : themeSecondary.light);
  };

  // const color = theme === 'light' ? '#212832' : '#FFF';
  // const backgroundColor = theme === 'light' ? '#FFF' : '#212832';

  // document.body.style.color = color;
  // document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ themeCards, theme, theme2, toggleTheme, textTheme, headerTheme, inputTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
