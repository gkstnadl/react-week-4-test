import memberJhope from "../../../assets/member-image/member-jhope.jpg";
import memberJimin from "../../../assets/member-image/member-jimin.jpg";
import memberJin from "../../../assets/member-image/member-jin.jpg";
import memberJk from "../../../assets/member-image/member-jk.jpg";
import memberRm from "../../../assets/member-image/member-rm.jpg";
import memberSuga from "../../../assets/member-image/member-suga.jpg";
import memberV from "../../../assets/member-image/member-v.jpg";
import { MemberBtnStyle } from "./styles";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

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
  // Object.entries(memberImages) : memberImages 객체를 배열로 변환
  // ['정국', 'memberJk'] 이런식으로
  // .map(([member]) => {...}) : Object.entries에서 얻은 각 배열의 첫 번째 요소(멤버의 이름)를 추출.
  // 차례대로 반복해서 실행. 멤버 7명이니 7번 실행해서 반환됨. 반환되는 결과는 설정해둔 버튼들
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Object.entries(memberImages).map(([member]) => (
          <SwiperSlide key={member}>
            <MemberBtnStyle onClick={() => onMemberClick(member)}>
              <img src={memberImages[member]} alt={member} />
              <span>{member}</span>
            </MemberBtnStyle>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MemberSlider;
