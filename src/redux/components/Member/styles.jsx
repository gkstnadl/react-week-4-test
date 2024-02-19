import styled from 'styled-components';
import Slider from 'react-slick';

export const SliderContainerStyle = styled.div`
  max-width: 600px;
  height: auto;
  margin: auto;
`;

export const MemberButtonsStyle = styled.div`
  /* max-width: 1200px;
    display: flex;
    justify-content: center; */
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
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    filter: brightness(50%);
    &:hover {
      filter: brightness(100%);
    }
  }
`;

export const SliderStyle = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;
