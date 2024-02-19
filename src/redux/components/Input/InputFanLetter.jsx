import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormStyle,
  NameStyle,
  ContentStyle,
  InputGroupStyle,
  LabelGroupStyle,
  MemberSelectStyle,
  SendMemberSelectStyle,
  SubmitBtnStyle,
  ButtonContainer,
} from "./styles";
import ValidationModal from "./ValidationModal";
import {
  addFanLetter,
  setModalVisibility,
  setModalMessage,
} from "../Redux/modules/actions"; // Redux 액션 가져오기
import { members } from "../Redux/modules/members"; // 멤버 목록 가져오기
import { MailIcon } from "assets/MailIcon";

function InputFanLetter() {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.showModal); // 모달 상태 선택
  const modalMessage = useSelector((state) => state.modalMessage); // 모달 메시지 선택

  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const inputRef = useRef(null);

  /** 팬레터 보내기 버튼을 눌렀을 때 동작될 로직들 */
  const handleFanLetterSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim() || !content.trim()) {
      // 메시지 설정 및 모달 표시
      // Redux 액션을 디스패치하여 모달 상태 변경
      dispatch(setModalMessage("닉네임과 내용을 모두 입력해주세요."));
      dispatch(setModalVisibility(true));
      return;
    }

    // 팬레터 추가 Redux 액션 디스패치
    dispatch(addFanLetter(nickname, content, selectedMember));
    setNickname("");
    setContent("");

    // 성공 메시지 설정 및 모달 표시
    dispatch(setModalMessage("팬레터가 성공적으로 전송되었습니다."));
    dispatch(setModalVisibility(true));
  };

  /** 유효성 검사를 위한 모달창 닫는 로직 */
  const handleModalClose = () => {
    dispatch(setModalVisibility(false));
  };
  // 컴포넌트가 마운트될 때 입력창에 자동으로 포커스
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <FormStyle onSubmit={handleFanLetterSubmit}>
        <InputGroupStyle>
          <LabelGroupStyle>닉네임</LabelGroupStyle>
          <NameStyle
            placeholder="최대 20자까지"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            maxLength={20}
            ref={inputRef}
            type="text"
          />
        </InputGroupStyle>
        <InputGroupStyle>
          <LabelGroupStyle>내용</LabelGroupStyle>
          <ContentStyle
            placeholder="최대 100자까지"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={100}
          />
        </InputGroupStyle>
        <SendMemberSelectStyle>
          <label>보낼 멤버</label>
          <MemberSelectStyle
            value={selectedMember}
            onChange={(e) => setSelectedMember(e.target.value)}
          >
            {members.map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
          </MemberSelectStyle>
        </SendMemberSelectStyle>
        <ButtonContainer>
          <SubmitBtnStyle type="submit">
            <MailIcon />
            팬레터 보내기
          </SubmitBtnStyle>
        </ButtonContainer>
      </FormStyle>
      {showModal && (
        <ValidationModal
          message={modalMessage}
          onConfirm={handleModalClose}
          onCancel={handleModalClose}
          showConfirmButton={false} // 취소 버튼 숨기기
        />
      )}
    </>
  );
}

export default InputFanLetter;
