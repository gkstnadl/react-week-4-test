import { useState, useEffect } from "react";
import MemberSlider from "../redux/components/Member/MemberSlider";
import InputFanLetter from "../redux/components/Input/InputFanLetter";
import FanletterList from "../redux/components/FanletterList/FanletterList";
import { members } from "../redux/modules/members";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  //현재 선택된 멤버 상태 관리
  const [selectedMember, setSelectedMember] = useState(null);
  const auth = useSelector((state) => state.auth);
  const { user, isLoading, isError } = auth;
  const navigate = useNavigate();

  /** 멤버 클릭시 해당 멤버가 선택되었음을 알리는 로직 */
  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  // user정보가 들어오기전에 아래 내용이 실행되어 login페이지로 이동하므로 타이머를 사용하여 방지
  useEffect(() => {
    if (!isLoading && !user) {
      // 로딩되고 user 정보가 없을 때 2초 후 로그인 페이지로 이동
      const timer = setTimeout(() => {
        navigate("/login");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, user, navigate]);

  if (isLoading || !user) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러 발생</div>;
  }

  return (
    <>
      <MemberSlider members={members} onMemberClick={handleMemberClick} />
      <InputFanLetter
        selectedMember={selectedMember}
        onMemberClick={handleMemberClick}
      />
      <FanletterList selectedMember={selectedMember} />
    </>
  );
}

export default Home;
