import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConjugatorIo = styled.h1`
  // *HTML Class* .conjugator-io

  height: 49px;
  width: 214px;
  color: #fff2b3;
  font-family: Nunito;
  font-size: 36px;
  line-height: 49px;
  position: absolute;
  z-index: 1;
`;

const WelcomeBack = styled.h2`
  // *HTML Class* .welcome-back

  height: 41px;
  width: 207px;
  color: #073069;
  font-family: Nunito;
  font-size: 30px;
  line-height: 41px;
`;

const Email = styled.p`
  // *HTML Class* .email

  height: 22px;
  width: 39px;
  color: #073069;
  font-family: Nunito;
  font-size: 16px;
  line-height: 22px;
  padding-right: 326px;
  margin-bottom: 8px;
`;

const Password = styled.p`
  // *HTML Class* .password

  height: 22px;
  width: 71px;
  color: #073069;
  font-family: Nunito;
  font-size: 16px;
  line-height: 22px;
  padding-right: 290px;
  margin-bottom: 8px;
`;

const Rectangle = styled.input`
  // *HTML Class* .rectangle

  height: 40px;
  width: 360px;
  background-color: #ffffff;
  border: none;
  font-size: larger;
  padding-left: 5px;
`;

const Button = styled.button`
  // *HTML Class* .rectangle
  height: 45px;
  width: 220px;
  border-radius: 6px;
  background-color: #4890f3;
  margin: 10px;
  color: wheat;
  font-weight: bold;
`;

const LetsGo = styled.span`
  // *HTML Class* .let-s-go

  height: 24px;
  width: 70px;
  color: #fff2b3;
  font-family: Nunito;
  font-size: 18px;
  line-height: 24px;
`;

const TopDiv = styled.div`
  display: flex;
`;

const BottomDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 210px;
`;

const WelcomeBackDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TopLeft = styled.img`
  position: absolute;
`;

const BottomRight = styled.img`
  position: absolute;
`;

const Aligator = styled.img`
  position: absolute;
  padding-left: 220px;
  z-index: 1;
  margin-top: 15px;
`;
export {
  ConjugatorIo,
  WelcomeBack,
  Email,
  Password,
  Rectangle,
  Button,
  LetsGo,
  Form,
  TopDiv,
  BottomDiv,
  WelcomeBackDiv,
  TopLeft,
  BottomRight,
  Aligator
};
