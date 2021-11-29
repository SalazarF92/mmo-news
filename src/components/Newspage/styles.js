import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #212832;

  .title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 32px;
  }

  .info {
    width: 80%;
    background: linear-gradient(180deg, #323944 -120.56%, #323944 -120.52%, #29323e 46.17%, #222a35 220%);
    border-radius: 10px;
  }
`;
