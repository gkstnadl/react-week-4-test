import styled from "styled-components";

export const SliderContainerStyle = styled.div`
  /* max-width: 600px; */
`;

export const MemberBtnStyle = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin: 20px 0;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    filter: brightness(50%);
    &:hover {
      filter: brightness(100%);
    }
  }

  span {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
