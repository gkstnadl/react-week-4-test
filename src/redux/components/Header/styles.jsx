import styled from "styled-components";

// 헤더 기본 스타일
export const HeaderStyle = styled.div`
  max-width: 1000px;
  max-height: 300px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
`;

export const LogoBtn = styled.button`
  background-color: transparent;
  border: none;
`;

// 로고 이미지 스타일
export const LogoImgStyle = styled.img`
  width: auto;
  max-height: 100px;
`;
export const HeaderTopBtnStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const MypageBtnStyle = styled.button`
  border: none;
  margin-right: 10px;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #f2f2f2;
  &:hover {
    background-color: #e2e2e2;
  }
`;

export const LogoutBtnStyle = styled.button`
  border: none;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #f2f2f2;
  &:hover {
    background-color: #e2e2e2;
  }
`;
