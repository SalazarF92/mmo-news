import React from 'react';
import { Container, Content, ButtonBlue } from './styles';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GameIdContext } from '../../../context/contextId';
import { ThemeContext } from '../../../context/themeColor';

export default function Card({ games }) {
  const { themeCards, textTheme } = useContext(ThemeContext);
  // console.log('gamesss',games);
  let navigate = useNavigate();
  const { setGameId } = useContext(GameIdContext);

  const handleDetails = () => {
    navigate('/game');
  };

  return (
    <Container>
      <Content>
        {games?.map((game) => (
          <div className="div-padding">
            <div className="flip-card">
              <div className="flip-card-inner" style={{ backgroundColor: themeCards }}>
                <div className="flip-card-front" style={{ backgroundColor: themeCards }}>
                  <div style={{ position: 'absolute', bottom: '150px' }}>
                    <img
                      src={`${game.thumbnail ? game.thumbnail : '/assets/logo/digimones.png'}`}
                      alt={game.title}
                      width={341}
                      height={200}
                    />
                  </div>
                  <div style={{ marginTop: 150, width: '100%' }}>
                    <div className="field-name" style={{ color: textTheme }}>
                      {game.id}
                    </div>
                    <div className="field-name" style={{ color: textTheme }}>
                      {game.title}
                    </div>
                    <span className="platform" style={{ color: textTheme, borderColor: textTheme }}>
                      {game.platform}
                    </span>
                  </div>
                </div>
                <div className="flip-card-back" style={{ backgroundColor: themeCards }}>
                  {/* <img src="/logo/back-card.jpg" alt="Digital" width={500} height={735} /> */}
                  <div style={{ fontFamily: 'Roboto', fontSize: '20px', color: textTheme }}>Description</div>
                  <div style={{ display: 'flex', bottom: '100px', marginBottom: '20px', padding: '5px' }}>
                    <div className="field-description" style={{ color: textTheme, backgroundColor: themeCards }}>
                      {game.short_description}
                    </div>
                  </div>
                  <div>
                    <ButtonBlue
                      onClick={() => {
                        handleDetails();
                        setGameId(game.id);
                      }}
                    >
                      VER MAIS
                    </ButtonBlue>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Content>
    </Container>
  );
}
