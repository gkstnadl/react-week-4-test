import styled from "styled-components";
import BtsSignupImg from "../../../assets/bts-signup.png";
import { Link } from "react-router-dom";

export const SignupBackgroundStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 70px;
  padding-bottom: 170px;
  background-image: url(${BtsSignupImg});
  background-size: cover;
  background-position: center;
`;

export const SignupBoxStyle = styled.div`
  padding: 30px 40px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: 0.9;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      margin-bottom: 10px;
    }

    input {
      width: 250px;
      padding: 10px;
      border-radius: 5px;
      border: 1px solid #e2e2e2;
      &::placeholder {
        color: #c2c2c2;
      }
    }

    button {
      width: 100%;
      margin: 10px 0;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #ac87c5;
      color: white;
      font-size: 16px;
      &:hover {
        background-color: #9c7ab8;
        opacity: 1;
      }
    }
    p {
      margin-top: 10px;
      font-size: 14px;
    }
  }
`;

export const LoginLinkStyle = styled(Link)`
  margin-top: 10px;
  color: #ac87c5;
  text-decoration: underline;
  cursor: pointer;
`;
