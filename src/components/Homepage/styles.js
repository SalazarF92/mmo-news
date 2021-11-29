import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  background-color: #212832;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputSearch = styled.input`
  width: 80%;
  height: 30px;
  margin-top: 40px;
  color: white;
  background: linear-gradient(180deg, #323944 -120.56%, #323944 -120.52%, #29323e 46.17%, #222a35 220%);
  border-radius: 40px;
  text-indent: 10px;

  .input {
    background: #000000;
    opacity: 0.5;
    border-radius: 10px;
  }
`;
