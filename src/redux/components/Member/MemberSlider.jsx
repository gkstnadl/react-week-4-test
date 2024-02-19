import memberJhope from "../assets/member-image/member-jhope.jpg";
import memberJimin from "../assets/member-image/member-jimin.jpg";
import memberJin from "../assets/member-image/member-jin.jpg";
import memberJk from "../assets/member-image/member-jk.jpg";
import memberRm from "../assets/member-image/member-rm.jpg";
import memberSuga from "../assets/member-image/member-suga.jpg";
import memberV from "../assets/member-image/member-v.jpg";
import {
  MemberButtonsStyle,
  MemberBtnStyle,
  SliderContainerStyle,
  SliderStyle,
} from "./styles";

const memberImages = {
  정국: memberJk,
  뷔: memberV,
  지민: memberJimin,
  슈가: memberSuga,
  진: memberJin,
  RM: memberRm,
  제이홉: memberJhope,
};

function MemberSlider({ onMemberClick }) {
  const slideSettings = {
    dots: true, // 슬라이더 하단의 점 표시 여부
    infinite: true, // 무한 슬라이딩 여부
    speed: 500, // 슬라이딩 속도
    slidesToShow: 3, // 한 번에 보여질 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
  };

  // Object.entries(memberImages) : memberImages 객체를 배열로 변환
  // ['정국', 'memberJk'] 이런식으로
  // .map(([member]) => {...}) : Object.entries에서 얻은 각 배열의 첫 번째 요소(멤버의 이름)를 추출.
  // 차례대로 반복해서 실행. 멤버 7명이니 7번 실행해서 반환됨. 반환되는 결과는 설정해둔 버튼들
  return (
    <SliderContainerStyle>
      <SliderStyle {...slideSettings}>
        {Object.entries(memberImages).map(([member]) => (
          <MemberButtonsStyle key={member}>
            <MemberBtnStyle onClick={() => onMemberClick(member)}>
              <img src={memberImages[member]} alt={member} />
              <span>{member}</span>
            </MemberBtnStyle>
          </MemberButtonsStyle>
        ))}
      </SliderStyle>
    </SliderContainerStyle>
  );
}

export default MemberSlider;
