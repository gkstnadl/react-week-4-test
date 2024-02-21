import styled from "styled-components";

export const ProfileTitleStyle = styled.h1`
  font-size: 30px;
`;

export const MypageContainerStyle = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  margin: 0 auto;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  input {
    display: none;
  }
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
`;

export const ProfileUpdateBtnStyle = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ac87c5;
  color: white;
  font-size: 16px;
  &:hover {
    background-color: #9c7ab8;
  }
`;

export const InputProfileStyle = styled.label`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #f2f2f2;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #e5e5e5;
  }
`;

export const ProfileNicknameStyle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;
