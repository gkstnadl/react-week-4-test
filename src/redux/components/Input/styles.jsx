import styled from "styled-components";

export const FormStyle = styled.form`
  max-width: 600px;
  margin: 50px auto;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  padding: 30px 40px;
  font-size: 16px;
  font-weight: 400;
`;
export const InputGroupStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const LabelGroupStyle = styled.label`
  width: 100%;
`;

export const NameStyle = styled.input`
  width: 200%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  &::placeholder {
    text-align: left;
    line-height: normal;
  }
`;

export const ContentStyle = styled.textarea`
  width: 200%;
  height: 60px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;

  &::placeholder {
    text-align: left;
    line-height: normal;
  }
`;
export const SendMemberSelectStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MemberSelectStyle = styled.select`
  padding: 5px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SubmitBtnStyle = styled.button`
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  background-color: #ac87c5;
  color: white;
  padding: 15px 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    background-color: #8860a5;
  }
`;
