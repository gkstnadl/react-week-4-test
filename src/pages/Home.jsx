import { useState, useEffect } from "react";
import MemberSlider from "../redux/components/Member/MemberSlider";
import InputFanLetter from "../redux/components/Input/InputFanLetter";
import FanletterList from "../redux/components/FanletterList/FanletterList";
import { members } from "../redux/modules/memberSlice";
import { useSelector } from "react-redux";
import Header from "../redux/components/Header/Header";

function Home() {
  //현재 선택된 멤버 상태 관리
  const [selectedMember, setSelectedMember] = useState(null);
  const auth = useSelector((state) => state.auth);
  const { isLoading, isError } = auth;

  /** 멤버 클릭시 해당 멤버가 선택되었음을 알리는 로직 */
  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러 발생</div>;
  }

  return (
    <>
      <Header />
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
