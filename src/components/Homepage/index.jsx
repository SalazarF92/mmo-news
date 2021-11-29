import { useEffect, useState } from 'react';
import { api } from '../../API';
import Card from './Card';
import { Container, Content, InputSearch } from './styles';
import useFuzzy from '../../hooks/useFuzzy';
import Header from '../Header';
import { ThemeContext } from '../../context/themeColor';
import { useContext } from 'react';

export default function Homepage() {
  const [games, setGames] = useState();
  const [searchMmmo, setSearchMmmo] = useState('');
  const { result: searchResult, search } = useFuzzy(games, {
    keys: ['title'],
  });
  const { theme } = useContext(ThemeContext);
  const { textTheme, inputTheme } = useContext(ThemeContext);

  useEffect(() => {
    const result = async () => {
      const { data } = await api.get('games', {
        headers: {
          'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
          'x-rapidapi-key': 'bdc2e4e6e2mshede3d0d60a3acafp112b09jsnab9c1abf0b79',
        },
      });
      setGames(data);
    };
    result();
  }, []);

  useEffect(() => {
    console.log(textTheme);
  }, [textTheme]);

  useEffect(() => {
    search(searchMmmo);
  }, [searchMmmo]);

  // return games.map((game) => {
  //   return <div>{game.title}</div>;
  // });
  return (
    <Container>
      <Header />
      <Content style={{ backgroundColor: theme }}>
        <InputSearch
          style={{ background: inputTheme, color: textTheme }}
          placeholder={'Procurar'}
          onChange={(e) => setSearchMmmo(e.target.value)}
        />
        <Card games={searchResult} />;{/* <GameDetail /> */}
      </Content>
    </Container>
  );
}
