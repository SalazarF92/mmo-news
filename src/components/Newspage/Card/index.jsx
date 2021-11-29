import React from 'react';
import { Container, Content, ButtonBlue } from './styles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { ThemeContext } from '../../../context/themeColor';

export default function Card({ news }) {
  const { themeCards, textTheme } = useContext(ThemeContext);

  // console.log('gamesss',games);
  // let navigate = useNavigate();

  // const handleDetails = () => {
  //   navigate('/game');
  // };

  return (
    <Container>
      <Content>
        {news?.map((newResult) => (
          <div className="div-padding">
            <div className="flip-card">
              <div className="flip-card-inner" style={{ backgroundColor: themeCards }}>
                <div className="flip-card-front" style={{ backgroundColor: themeCards }}>
                  <div>
                    <img
                      src={`${newResult.main_image ? newResult.main_image : '/assets/logo/digimones.png'}`}
                      alt={newResult.title}
                      width={700}
                      height={400}
                    />
                  </div>
                  <div style={{ marginTop: 50, width: '100%' }}>
                    <div className="field-name" style={{ color: textTheme }}>
                      {newResult.title}
                    </div>
                    <div className="field-name" style={{ color: textTheme }}>
                      {newResult.short_description}
                    </div>
                  </div>
                </div>
                <div className="flip-card-back" style={{ backgroundColor: themeCards }}>
                  {/* <img src="/logo/back-card.jpg" alt="Digital" width={500} height={735} /> */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      bottom: '100px',
                      marginBottom: '20px',
                      padding: '5px',
                      alignItems: 'center',
                      gap: '2rem',
                    }}
                  >
                    <img
                      src={`${newResult.thumbnail ? newResult.thumbnail : '/assets/logo/digimones.png'}`}
                      alt={newResult.title}
                      width={320}
                      height={200}
                    />
                    <div className="field-description" style={{ backgroundColor: themeCards, color: textTheme }}>
                      {newResult.article_content}
                    </div>
                  </div>
                  <div>
                    {/* <ButtonBlue
                      onClick={() => {
                        handleDetails();
                      }}
                    >
                      VER MAIS
                    </ButtonBlue> */}
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
