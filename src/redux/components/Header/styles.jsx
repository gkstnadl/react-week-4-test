import styled from "styled-components";

// 헤더 기본 스타일
export const HeaderStyle = styled.div`
  max-width: 1000px;
  max-height: 300px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const LogoDivStyle = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
`;

// 로고 이미지 스타일
export const LogoImgStyle = styled.img`
  width: auto;
  max-height: 120px;
  cursor: pointer;
`;
export const HeaderTopBtnStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;
