import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/ThemeContext';
import { Container, Main, List, ListItem, ToggleTheme } from './styles';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Logo } from '../Logo';

export function Header() {

  const navigate = useNavigate();
  const { toggleTheme, theme } = useTheme();
  const [activePage, setActivePage] = useState("");

  const listItemsData = [
    { text: 'About', path: '/about' },
    { text: 'Projects', path: '/projects' },
  ];

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, [window.location.pathname]);

  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <Container>

      <Main>

        <Logo title="<Dev />" onClick={() => handleNavigation("/")} />

        <List>
          {listItemsData.map((item, index) => (
            <ListItem
              key={index}
              $isActive={activePage === item.path}
              onClick={() => handleNavigation(item.path)}
            >
              {item.text}
            </ListItem>
          ))}
        </List>

        <ToggleTheme onClick={toggleTheme}>
          {theme === 'dark' ? <FiMoon /> : <FiSun />}
        </ToggleTheme>
        
      </Main>

    </Container>
  );
}