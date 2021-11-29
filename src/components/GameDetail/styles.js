import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  background-color: #212832;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    /* position: relative;
    right: 41rem; */
    display: flex;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 32px;
    color: white;
    margin-left: 36px;
  }

  .info {
    width: 80%;
    background: linear-gradient(180deg, #323944 -120.56%, #323944 -120.52%, #29323e 46.17%, #222a35 220%);
    border-radius: 10px;
    .detalhes {
      /* position: relative;
      right: 16rem; */
      display: flex;
      /* justify-content: space-around; */
      margin-left: 36px;
      margin-top: 50px;

      color: white;
      margin-top: 30px;

      .platform {
        width: 100%;
        height: 24px;
        left: 790px;
        top: 639px;
        padding: 3px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue', sans-serif;
        font-size: 12px;
        color: #00e0ff;
        border: 1px solid #00e0ff;
        box-sizing: border-box;
        border-radius: 30px;
      }
    }

    .description {
      width: 95%;
      text-align: left;
      color: white;
      margin-top: 24px;
      padding: 36px;
      /* margin-left: auto;
      margin-right: auto; */

      .description-title {
        margin-bottom: 12px;
        text-align: left;
      }
    }

    .system {
      /* display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; */
      margin-left: 2rem;

      .system-content {
        width: 95%;
        border-radius: 5px;
        background-color: #141920;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue', sans-serif;
        padding: 12px;
      }

      .div-flex {
        display: flex;
        padding: 5px;
        margin-top: 10px;
      }
    }
  }
`;

export const Comments = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  .title {
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    font-size: 28px;
  }

  .text-area {
    margin-top: 15px;
    width: 95%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    text-indent: 10px;
    background: #141920;
    border-radius: 10px;
    margin-left: 36px;
    height: 120px;
    resize: none;
    color: white;
  }

  .div-input {
    width: 95%;
    display: flex;
    margin-left: 2rem;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    .input-user {
      margin-top: 5px;
      width: 95%;
      background: #141920;
      border-radius: 10px;
      text-indent: 10px;
      height: 40px;
      resize: none;
      color: white;
    }
    .button-post {
      background: #0b5ab8;
      width: 60%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
        'Helvetica Neue', sans-serif;
      border-radius: 10px;
      margin-top: 5px;
      height: 45px;
      color: white;
      font-size: 18px;
    }
  }
  .like-svg {
    cursor: pointer;
    .like-svg:hover {
      fill: 'green';
    }
  }
`;
