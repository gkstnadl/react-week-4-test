import styled from 'styled-components';

export const FanLetterDetailStyle = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  margin-top: 20px;
  padding: 30px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  max-width: 600px;
  font-size: 24px;
`;

export const LetterProfileStyle = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const LetterTimeStyle = styled.p`
  font-size: 16px;
  opacity: 50%;
  margin-top: 10px;
`;

export const LetterDetailContentStyle = styled.p`
  width: 100%;
  border-radius: 5px;
  background-color: #f2f2f2;
  font-size: 20px;
  padding: 15px;
  text-align: left;
  margin: 10px 0;
  line-height: 140%;
`;

export const LetterContentTextStyle = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: none;
  background-color: #f2f2f2;
  padding: 15px;
  margin: 10px 0;
  font-size: 20px;
`;

export const BtnsStyle = styled.div`
  margin: auto;
`;

export const EditClickBtnStyle = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ac87c5;
  padding: 10px 30px;
  margin-left: 20px;
  color: white;
  &:hover {
    background-color: #8860a5;
  }
`;

export const DeleteClickBtnStyle = styled.button`
  border: 1px solid #ac87c5;
  border-radius: 5px;
  background-color: white;
  padding: 10px 30px;
  color: #ac87c5;
  &:hover {
    background-color: #d8d8d8;
    color: white;
    border: 1px solid #d8d8d8;
  }
`;
