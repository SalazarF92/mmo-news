import React from 'react';
import { Container, Content } from './styles';
import { useEffect, useState, useContext } from 'react';
import { api } from '../../API';
import Card from './Card';
import Header from '../Header';
import { ThemeContext } from '../../context/themeColor';

export default function Newspage() {
  const [news, setNews] = useState();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const result = async () => {
      const { data } = await api.get(`latestnews`, {
        headers: {
          'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
          'x-rapidapi-key': 'bdc2e4e6e2mshede3d0d60a3acafp112b09jsnab9c1abf0b79',
        },
      });
      setNews(data);
      console.log(data);
    };
    result();
  }, []);

  return (
    <Container>
      <Header />
      <Content style={{backgroundColor: theme}}>
        <div className="title"></div>
        <div className="info"></div>
        <Card news={news} />
      </Content>
    </Container>
  );
}
