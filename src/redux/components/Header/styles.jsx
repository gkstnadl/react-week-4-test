import styled from "styled-components";

// 헤더 기본 스타일
export const HeaderStyle = styled.div`
  max-width: 1000px;
  max-height: 150px;
  display: flex;
  justify-content: center;
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
  height: 100px;
`;
export const HeaderTopBtnStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

export const MypageBtnStyle = styled.button`
  border: none;
  margin-right: 10px;
  font-size: 16px;
`;

export const LogoutBtnStyle = styled.button`
  border: none;
  font-size: 16px;
`;
