import React, { useState } from 'react';
import MemberSlider from '../components/MemberSlider';
import InputFanLetter from '../components/InputFanLetter';
import FanLetterList from '../components/FanLetterList';
import { members } from '../Redux/modules/members';

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
      <FanLetterList selectedMember={selectedMember} />
    </>
  );
}

export default Main;
