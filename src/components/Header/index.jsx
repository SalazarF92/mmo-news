import { Container, Content, Navigation, ThemeButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/themeColor';
import { useContext, useState } from 'react';

export default function Header() {
  const { toggleTheme, headerTheme, textTheme } = useContext(ThemeContext);
  const [title, setTitle] = useState('Home');
  let navigate = useNavigate();

  const goToGames = () => {
    navigate('/');
  };
  const goToNews = () => {
    navigate('/latest');
  };
  return (
    <Container>
      <Content style={{ fontSize: '48px', backgroundImage: headerTheme, color: textTheme }}>
        {title}
        <Navigation>
          <button
            className="button-nav"
            onClick={() => {
              goToGames();
              setTitle('Home');
            }}
            style={{ color: textTheme }}
          >
            Games
          </button>
          <button
            className="button-nav"
            onClick={() => {
              goToNews();
              setTitle('News');
            }}
            style={{ color: textTheme }}
          >
            News
          </button>
          <div>
            <ThemeButton>
              {/* <div class="container"> */}
              {/* <div class="btn1_container">
                  <span class="one"></span>
                </div> */}
              {/* </div> */}
            </ThemeButton>
          </div>
          <button className="button-nav" onClick={toggleTheme} style={{ color: textTheme }}>
            Theme
          </button>
        </Navigation>
      </Content>
    </Container>
  );
}
