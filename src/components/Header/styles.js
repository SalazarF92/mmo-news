import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  /* width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

export const Content = styled.div`
  width: 100%;
  height: 150px;
  /* background-color: #212832; */
  /* background-image: linear-gradient(#0d1014, #171c24, #212832); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Navigation = styled.div`
  display: flex;

  .button-nav {
    margin: 12px;
    font-size: 18px;
    color: white;
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
  }
`;

export const ThemeButton = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(to right, #2f0743, #41295a);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .btn1_container,
  .btn2_container,
  .btn3_container,
  .btn4_container {
    width: 150px;
    height: 56px;
    background-color: black;
    display: flex;
    position: relative;
    border: 3px solid #111;
    margin-right: 20px;
    box-shadow: -1px 3px 22px 0px rgba(0, 0, 0, 0.75);
  }

  /* Style 1 */
  .btn1_container {
    border-radius: 30px;
  }

  .one {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: grey;
    display: block;
    border-radius: 30px;
    border: 2px solid red;
    background-color: rgba(255, 0, 0, 0.5);
    transition: all 0.3s ease;
  }

  .one {
    left: 00px;
  }

  .inactive1 {
    transform: translateX(calc(100px - 6px));
    border: 2px solid #10d610;
    background-color: rgba(0, 255, 0, 0.3);
  }

  /* Style 2 */
  .two {
    position: absolute;
    height: 50px;
    width: 75px;
    background-color: grey;
    display: block;
    border: 2px solid red;
    background-color: rgba(255, 0, 0, 0.5);
    transition: all 0.3s ease;
    clip-path: polygon(0 0, 50% 0, 100% 100%, 0% 100%);
  }

  .two {
    left: 00px;
  }

  .inactive2 {
    transform: translateX(calc(75px - 6px));
    border: 2px solid #10d610;
    background-color: rgba(0, 255, 0, 0.3);
    clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
  }

  /* Style 3 */

  .btn3_container {
    display: flex;
    border: 2px solid #fff;
    overflow: hidden;
    background-color: #fff;
    border-radius: 10px;
  }

  .btn {
    line-height: 50px;
    font-size: 20px;
    height: 100%;
    padding: 0 20px;
    width: 75px;
    display: block;
    transition: all 0.3s ease;
    border-right: 0px;
    text-shadow: 0 0 1px #111;
    color: #fff;
  }

  .btn2 {
    right: -85px;
  }

  .main {
    position: absolute;
    background-color: #ff0099;
    height: 100%;
    width: 60px;
    box-shadow: 0px 0px 17px -5px #000000;
    border: 1px solid #111;
    right: -5px;
    transition: all 500ms ease;
  }

  .active {
    right: 90px;
  }

  .btn1 {
    background-color: #000000;
  }

  .btn2 {
    background-color: #000000;
  }

  /* Style 4 */
`;
