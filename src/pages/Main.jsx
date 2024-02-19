import { useState } from "react";
import MemberSlider from "../redux/components/Member/MemberSlider";
import InputFanLetter from "../redux/components/Input/InputFanLetter";
import FanletterList from "../redux/components/FanletterList/FanletterList";
import { members } from "../redux/modules/members";

function Main() {
  //현재 선택된 멤버 상태 관리
  const [selectedMember, setSelectedMember] = useState(null);

  /** 멤버 클릭시 해당 멤버가 선택되었음을 알리는 로직 */
  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <>
      <MemberSlider members={members} onMemberClick={handleMemberClick} />
      <InputFanLetter />
      <FanletterList selectedMember={selectedMember} />
    </>
  );
}

export default Main;
