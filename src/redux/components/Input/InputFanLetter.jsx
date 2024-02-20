import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FormStyle,
  FormNicknameStyle,
  ContentStyle,
  InputGroupStyle,
  LabelGroupStyle,
  MemberSelectStyle,
  SendMemberSelectStyle,
  SubmitBtnStyle,
  ButtonContainer,
} from "./styles";
import ValidationModal from "../Modal/ValidationModal";
import { addFanLetter } from "../../modules/fanletter"; // Redux 액션 가져오기
import { openModal, closeModal } from "../../../redux/modules/modal";
import { members } from "../../modules/members"; // 멤버 목록 가져오기
import { MailIcon } from "../../../assets/MailIcon";

function InputFanLetter() {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const { showModal, message } = useSelector((state) => state.modal);
  const { user } = useSelector((state) => state.auth);
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (user && user.nickname) {
      setNickname(user.nickname);
    }
    if (inputRef.current) {
      inputRef.current.focus(); // 컴포넌트가 마운트될 때 입력창에 자동으로 포커스
    }
  }, [user]);

  /** 팬레터 보내기 버튼을 눌렀을 때 동작될 로직들 */
  const handleFanLetterSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) {
      // 메시지 설정 및 모달 표시
      // Redux 액션을 디스패치하여 모달 상태 변경
      dispatch(
        openModal({
          message: "내용을 입력해주세요.",
          showConfirmButton: false,
          showModal: true,
        })
      );
      return;
    }

    // 팬레터 추가 Redux 액션 디스패치
    dispatch(addFanLetter(nickname, content, selectedMember));
    setContent("");

    // 성공 메시지 설정 및 모달 표시
    dispatch(
      openModal({
        message: "팬레터가 성공적으로 전송되었습니다.",
        showConfirmButton: false,
        showModal: true,
      })
    );
  };

  /** 유효성 검사를 위한 모달창 닫는 로직 */
  const handleModalClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <FormStyle onSubmit={handleFanLetterSubmit}>
        <InputGroupStyle>
          <LabelGroupStyle>닉네임</LabelGroupStyle>
          <FormNicknameStyle>{nickname}</FormNicknameStyle>
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
          message={message}
          onConfirm={handleModalClose}
          onCancel={handleModalClose}
          showConfirmButton={false} // 취소 버튼 숨기기
        />
      )}
    </>
  );
}

export default InputFanLetter;
