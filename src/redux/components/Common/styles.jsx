import styled from "styled-components";
import { Link } from "react-router-dom";

export const BodyStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 30px;
`;

export const ContainerStyle = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
`;

export const MypageBtnStyle = styled(Link)`
  border: none;
  margin-right: 10px;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #f2f2f2;
  text-decoration: none;
  color: #000000;
  &:hover {
    background-color: #e2e2e2;
  }
`;

export const LogoutBtnStyle = styled(Link)`
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #f2f2f2;
  text-decoration: none;
  color: #000000;
  &:hover {
    background-color: #e2e2e2;
  }
`;
