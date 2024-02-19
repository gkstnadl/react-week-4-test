import styled from "styled-components";

// 모달 배경 스타일
export const ModalBackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// 모달 콘텐츠 스타일
export const ModalContentStyle = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

// 모달 메세지 스타일
export const ModalMessageStyle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
// 모달 취소버튼 스타일
export const CancelClickBtnStyle = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 10px 40px;
  &:hover {
    background-color: #d8d8d8;
  }
`;
// 모달 확인버튼 스타일
export const ConfirmClickBtnStyle = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ac87c5;
  padding: 10px 40px;
  margin-left: 10px;
  color: white;
  &:hover {
    background-color: #9c7ab8;
  }
`;
