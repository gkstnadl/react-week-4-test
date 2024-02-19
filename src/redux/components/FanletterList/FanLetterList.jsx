import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ListTitleStyle,
  ListBodyStyle,
  ListContentStyle,
  LetterContentStyle,
  ListNameTimeStyle,
  ListTimeStyle,
  LetterImgNameStyle,
} from "./styles";
import { ProfileIcon } from "../../../assets/ProfileIcon";

function FanLetterList({ selectedMember }) {
  const fanLetters = useSelector((state) => state.fanLetters);
  const navigate = useNavigate();
  const { memberName } = useParams(); // URL에서 멤버 이름을 받음
  // selectedMember이라는 prop이 있으면 그걸 사용, 없으면 URL의 memberName에서 가져옴
  const memberToShow = selectedMember || memberName;
  const [filteredFanLetters, setFilteredFanLetters] = useState([]);

  useEffect(() => {
    // selectedMember 또는 memberName이 변경될 때 실행
    const lettersToShow = selectedMember
      ? fanLetters[selectedMember] || []
      : Object.values(fanLetters || {}).flat();
    setFilteredFanLetters(lettersToShow);
  }, [fanLetters, selectedMember, memberName]);

  /** 클릭하면 id를 기반으로 상세페이지가 열리는 로직 */
  const handleLetterClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <ListBodyStyle>
      <ListTitleStyle>{memberToShow}님께 온 팬레터</ListTitleStyle>
      {filteredFanLetters.map((letter) => (
        <ListContentStyle
          key={letter.id}
          onClick={() => handleLetterClick(letter.id)}
        >
          <ListNameTimeStyle>
            <LetterImgNameStyle>
              <ProfileIcon />
              <p>{letter.nickname}</p>
            </LetterImgNameStyle>
            <ListTimeStyle>
              {new Date(letter.sentTime).toLocaleString()}
            </ListTimeStyle>
          </ListNameTimeStyle>
          <LetterContentStyle>{letter.content}</LetterContentStyle>
        </ListContentStyle>
      ))}
    </ListBodyStyle>
  );
}

export default FanLetterList;
