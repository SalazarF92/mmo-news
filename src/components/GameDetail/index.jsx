import React from 'react';
import { Container, Content, Comments } from './styles';
import { useEffect, useState, useContext, useReducer } from 'react';
import { api } from '../../API';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
// import { Slide } from 'react-slideshow-image';useContext
import 'react-slideshow-image/dist/styles.css';
import { GameIdContext } from '../../context/contextId';
import Header from '../Header';
import { ThemeContext } from '../../context/themeColor';

export default function GameDetail() {
  const [gameSelected, setGameSelected] = useState();
  const [reload, setReload] = useState(false);
  const [storedData, setStoredData] = useState();
  const { themeCards, textTheme, theme, theme2 } = useContext(ThemeContext);

  const inicialState = { count: 0 };

  function sumValue(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };

      default:
        throw new Error();
    }
  }
  function LikeDislike() {
    const [like, dispatchLike] = useReducer(sumValue, inicialState);
    const [dislike, dispatchDislike] = useReducer(sumValue, inicialState);
    return (
      <>
        <div style={{ color: 'green' }}>{like.count}</div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: 'pointer' }}
          onClick={() => dispatchLike({ type: 'increment' })}
        >
          <path
            d="M11.1781 4.431C11.2698 4.29776 11.3926 4.18882 11.5357 4.11355C11.6789 4.03829 11.8383 3.99897 12.0001 3.99897C12.1618 3.99897 12.3212 4.03829 12.4644 4.11355C12.6076 4.18882 12.7303 4.29776 12.8221 4.431L21.8221 17.431C21.9262 17.5809 21.9873 17.7566 21.9987 17.9388C22.0101 18.121 21.9713 18.3029 21.8865 18.4646C21.8018 18.6263 21.6744 18.7618 21.5181 18.8561C21.3618 18.9505 21.1826 19.0003 21.0001 19H3.00006C2.8179 18.9992 2.6394 18.9489 2.48374 18.8542C2.32808 18.7596 2.20116 18.6244 2.11663 18.463C2.03209 18.3017 1.99314 18.1203 2.00397 17.9385C2.01479 17.7566 2.07498 17.5812 2.17806 17.431L11.1781 4.431Z"
            fill="#A1A1A1"
          />
        </svg>
        <div style={{ color: 'red' }}>{dislike.count}</div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="red"
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: 'pointer' }}
          onClick={() => dispatchDislike({ type: 'decrement' })}
        >
          <path
            d="M11.1781 19.569C11.2698 19.7022 11.3926 19.8112 11.5357 19.8864C11.6789 19.9617 11.8383 20.001 12.0001 20.001C12.1618 20.001 12.3212 19.9617 12.4644 19.8864C12.6076 19.8112 12.7303 19.7022 12.8221 19.569L21.8221 6.569C21.9262 6.41906 21.9873 6.24343 21.9987 6.06121C22.0101 5.87898 21.9713 5.69712 21.8865 5.53539C21.8018 5.37366 21.6744 5.23825 21.5181 5.14386C21.3618 5.04947 21.1826 4.99971 21.0001 5H3.00006C2.8179 5.00075 2.6394 5.05115 2.48374 5.14576C2.32808 5.24038 2.20116 5.37564 2.11663 5.53699C2.03209 5.69835 1.99314 5.8797 2.00397 6.06153C2.01479 6.24337 2.07498 6.41881 2.17806 6.569L11.1781 19.569Z"
            fill="#A2A2A2"
          />
        </svg>
        {/* <button onClick={() => dispatch({ type: 'decrement' })}>-</button> */}
      </>
    );
  }

  const allStored = JSON.parse(localStorage.getItem(`${gameSelected?.title}`));
  const { gameId } = useContext(GameIdContext);

  useEffect(() => {
    const result = async () => {
      const { data } = await api.get(`game?id=${gameId}`, {
        headers: {
          'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
          'x-rapidapi-key': 'bdc2e4e6e2mshede3d0d60a3acafp112b09jsnab9c1abf0b79',
        },
      });
      setGameSelected(data);
      const dataStored = JSON.parse(localStorage.getItem(`${gameSelected?.title}`));
      setStoredData(dataStored);
    };
    result();
  }, []);

  useEffect(() => {
    const dataStored = JSON.parse(localStorage.getItem(`${gameSelected?.title}`));
    setStoredData(dataStored);
    setReload(false);
    window.scrollTo(0, document.body.scrollHeight);
    console.log('dei reload');
  }, [reload]);

  useEffect(() => {
    console.log(storedData);
  }, [storedData]);

  const PostCommentSchema = Yup.object().shape({
    comment: Yup.string()
      .min(10, 'Comentário muito curto!')
      .max(50, 'Excedeu o número de caractéres!')
      .required('Required'),
    name: Yup.string().min(2, 'Nome muito curto!').max(15, 'Excedeu o número de caractéres!').required('Required'),
    email: Yup.string().email('E-mail inválido!').required('Required'),
  });

  const FormComments = () => (
    <div>
      <Formik
        initialValues={{
          comment: '',
          name: '',
          email: '',
        }}
        // isSubmitting={true}
        validationSchema={PostCommentSchema}
        onSubmit={async (values) => {
          await new Promise((values) => setTimeout(values, 500));
          const allStored = JSON.parse(localStorage.getItem(`${gameSelected.title}`));
          const arrayResult = [];
          if (allStored === null) {
            window.localStorage.setItem(`${gameSelected.title}`, JSON.stringify([values]));
            // window.location.reload(true);
            // window.scrollTo(0, document.body.scrollHeight);

            setReload(true);
          } else {
            for (let i in allStored) {
              arrayResult.push(allStored[i]);
            }
            arrayResult.push(values);
            window.localStorage.setItem(`${gameSelected.title}`, JSON.stringify(arrayResult));
            // window.location.reload(true);
            // window.scrollTo(0, document.body.scrollHeight);

            setReload(true);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="comment"></label>
            <Field
              style={{ backgroundColor: theme }}
              className="text-area"
              id="comment"
              name="comment"
              placeholder="Digite seu comentário"
              as="textarea"
            />
            {errors.comment && touched.comment ? <div style={{ color: 'white' }}>{errors.comment}</div> : null}

            <div className="div-input">
              <label htmlFor="name"></label>
              <Field
                className="input-user"
                id="name"
                name="name"
                placeholder="Nome"
                style={{ backgroundColor: theme }}
              />
              {errors.name && touched.name ? <div style={{ color: 'white' }}>{errors.name}</div> : null}
              <label htmlFor="email"></label>
              <Field
                className="input-user"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                style={{ backgroundColor: theme }}
              />
              {errors.email && touched.email ? <div style={{ color: 'white' }}>{errors.email}</div> : null}
              <button className="button-post" type="submit">
                Postar Comentário
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );

  return (
    <Container>
      <Header />
      <Content style={{ backgroundColor: theme }}>
        <div className="info" style={{ background: theme2 }}>
          <div className="title" style={{ marginBottom: '1.5rem' }}>
            {gameSelected?.title}
          </div>
          <div style={{ marginLeft: '36px' }}>
            {/* <Slide> */}
            {gameSelected?.screenshots.map((images, index) => {
              if (index === 0) {
                return (
                  <div style={{ width: '100%' }}>
                    <img src={images.image} alt={images.id} style={{ width: '1470px', height: '850px' }} />
                  </div>
                );
              } else return <img src={images.image} alt={images.id} style={{ width: '490px', height: '350px' }} />;
            })}
            {/* </Slide> */}
          </div>

          <div className="title" style={{ color: textTheme }}>
            DETALHES
          </div>
          <div className="detalhes" style={{ display: 'flex', gap: '15rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div className="flex" style={{ fontWeight: 'bold', color: textTheme }}>
                GÊNERO
              </div>
              <div className="flex" style={{ color: textTheme }}>
                {gameSelected?.genre}
              </div>
            </div>
            <div className="flex" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div style={{ fontWeight: 'bold', color: textTheme }}>PLATAFORMAS</div>
              <span className="platform" style={{ color: textTheme, borderColor: textTheme, textAlign: 'center' }}>
                {gameSelected?.platform}
              </span>
            </div>
            <div className="flex" style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div style={{ fontWeight: 'bold', color: textTheme }}>DATA DE LANÇAMENTO</div>
              <div className="flex" style={{ color: textTheme }}>
                {gameSelected?.release_date}
              </div>
            </div>
          </div>
          <div className="description">
            <div className="description-title" style={{ fontSize: '20px', fontWeight: 'bold', color: textTheme }}>
              DESCRIPTION
            </div>
            <div className="flex" style={{ color: textTheme }}>
              {gameSelected?.short_description}
            </div>
          </div>
          <div className="system">
            <div className="system-content" style={{ backgroundColor: theme }}>
              <div className="div-flex">
                <div style={{ fontSize: '18px', fontWeight: 'bold', color: textTheme }}>
                  REQUISITOS MÍNIMOS DO SISTEMA
                </div>
              </div>
              <div className="div-flex">
                <div style={{ color: textTheme }}>Sistema Operacional: </div>
                <div style={{ marginLeft: '0.5rem', color: textTheme }}>
                  {gameSelected?.minimum_system_requirements.os}{' '}
                </div>
              </div>
              <div className="div-flex">
                <div style={{ color: textTheme }}>Processador: </div>
                <div style={{ marginLeft: '0.5rem', color: textTheme }}>
                  {gameSelected?.minimum_system_requirements.processor}{' '}
                </div>
              </div>
              <div className="div-flex">
                <div style={{ color: textTheme }}>Memória: </div>
                <div style={{ marginLeft: '0.5rem', color: textTheme }}>
                  {gameSelected?.minimum_system_requirements.memory}{' '}
                </div>
              </div>
              <div className="div-flex">
                <div style={{ color: textTheme }}>Placa de vídeo: </div>
                <div style={{ marginLeft: '0.5rem', color: textTheme }}>
                  {gameSelected?.minimum_system_requirements.graphics}{' '}
                </div>
              </div>
              <div className="div-flex">
                <div style={{ color: textTheme }}>Armazenamento: </div>
                <div style={{ marginLeft: '0.5rem', color: textTheme }}>
                  {gameSelected?.minimum_system_requirements.storage}{' '}
                </div>
              </div>
            </div>
          </div>
          <Comments style={{ marginTop: '2rem' }}>
            <div className="title" style={{ color: textTheme }}>
              COMENTÁRIOS
            </div>
            <FormComments style={{ backgroundColor: theme }} />

            {/* <textarea
              className="text-area"
              placeholder="Deixe seu comentário aqui:"
              onChange={(e) => setComment(e.target.value)}
            />
            <div className="div-input">
              <input className="input-user" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
              <input
                className="input-user"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="button-post" onClick={sendComment}>
                Postar Comentário
              </button>
            </div> */}
            <hr
              style={{
                width: '95%',
                height: '0.13rem',
                backgroundColor: 'black',
                borderColor: 'black',
                marginTop: '2rem',
                marginBottom: '2rem',
              }}
            ></hr>
            <div style={{ position: 'relative', left: '2rem', textAlign: 'left' }}>
              {allStored?.map((allComments, index) => {
                if (index % 2 === 0) {
                  return (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                        <div style={{ color: 'red', fontSize: '32px' }}>{allComments.name}</div>
                        <div style={{ display: 'flex' }}>
                          <LikeDislike />
                          {/* <img src="/assets/logo/like.png" alt="like" style={{ width: '24px', cursor: 'pointer' }} />
                        <img
                        src="/assets/logo/dislike.png"
                        alt="dislike"
                        style={{ width: '24px', cursor: 'pointer' }}
                      /> */}
                        </div>

                        <div style={{ color: textTheme }}>{allComments.comment}</div>
                      </div>

                      <hr
                        style={{
                          position: 'relative',
                          width: '95%',
                          height: '0.1rem',
                          backgroundColor: 'darkgray',
                          borderColor: 'darkgray',
                          marginTop: '2rem',
                          marginBottom: '2rem',
                          right: '2.3rem',
                        }}
                      ></hr>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div style={{ gap: '0.2rem' }}>
                        <div style={{ color: 'lightgreen', fontSize: '32px' }}>{allComments.name}</div>
                        <div style={{ color: textTheme }}>{allComments.comment}</div>
                      </div>
                      <hr
                        style={{
                          position: 'relative',
                          width: '95%',
                          height: '0.1rem',
                          backgroundColor: 'darkgray',
                          borderColor: 'darkgray',
                          marginTop: '2rem',
                          marginBottom: '2rem',
                          right: '2.3rem',
                        }}
                      ></hr>
                    </>
                  );
                }
              })}
            </div>
          </Comments>
        </div>
      </Content>
    </Container>
  );
}
