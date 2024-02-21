import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';

const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTheme = async () => {
      setLoading(false);
    };

    loadTheme();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, loading]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};