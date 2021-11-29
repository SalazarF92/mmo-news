import styled from 'styled-components';

export const Container = styled.div`
  padding: 36px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .div-padding {
    padding: 48px;
  }
  .flip-card {
  }

  .flip-card-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 600px;
    padding: 36px;
    border-radius: 8px;
    box-shadow: 5px 5px 15px black;
    background-color: #141920;
    border: solid 0.5px black;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .flip-card-back {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #141920;
    color: white;
    transform: rotateY(180deg);
    border-radius: 8px;
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 600px;
    padding: 36px;
    border-radius: 8px;
    color: white;
    box-shadow: 5px 5px 15px black;
    background-color: #141920;
    border: solid 0.5px black;
  }

  img {
    /* border-radius: 8px; */
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    /* border: 3px solid gray !important; */
    /* box-shadow: 0px 0px 15px 5px black inset; */
  }

  .div-field {
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: center;
    justify-content: center;
  }

  .field-name {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 24px;

    /* border: solid 2px darkgray; */
    /* background-color: #212832; */
    border-radius: 5px;
    color: white;
    padding: 3px;
  }

  .field-description {    
    width: 100%;
    display: flex;
    /* position: absolute; */
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 14px;


    /* border: solid 2px; */
    background-color: #212832;
    border-radius: 5px;
    color: white;
    padding: 3px;
  }

  .platform {
    width: 100%;
    height: 14px;
    left: 790px;
    top: 639px;
    padding: 3px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 12px;

    border: 1px solid #00e0ff;
    box-sizing: border-box;
    border-radius: 30px;
  }
`;

export const ButtonBlue = styled.button`
  width: 155px;
  height: 45px;
  color: white;
  cursor: pointer;

  background: #0b5ab8;
  border-radius: 10px;
`;
