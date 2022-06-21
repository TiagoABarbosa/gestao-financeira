import styled from "styled-components";

export const Container = styled.div`
`;

export const Header = styled.div`
  background-image: url("background-finance.png");
  background-position: right;
  opacity: 100%;
  height: 150px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  padding-top: 30px;
  text-shadow: black 0.2em 0.1em 0.1em;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 5px #CCC;
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  margin: auto;
  max-width: 350px;
  margin-top: 150px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;