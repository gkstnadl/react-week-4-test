import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
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
import { members } from "../../modules/members";

function FanletterList({ selectedMember }) {
  const fanLetters = useSelector((state) => state.fanletter);
  const navigate = useNavigate();
  const location = useLocation();
  const { memberName } = useParams(); // URL에서 멤버 이름을 받음
  const isValidMember = members.includes(memberName);

  // selectedMember이라는 prop이 있으면 그걸 사용, 없으면 URL의 memberName에서 가져옴
  const memberToShow = selectedMember || memberName;
  const [filteredFanLetters, setFilteredFanLetters] = useState([]);
  useEffect(() => {
    if (location.pathname !== "/" && !isValidMember) {
      const timer = setTimeout(() => {
        navigate("/error");
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const lettersToShow = fanLetters.letters.filter(
        (letter) => letter.member === memberToShow
      );
      setFilteredFanLetters(lettersToShow);
    }
  }, [
    fanLetters,
    selectedMember,
    memberName,
    navigate,
    isValidMember,
    location.pathname,
  ]);

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

export default FanletterList;
