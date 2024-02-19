import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ValidationModal from "./ValidationModal";
import {
  FanLetterDetailStyle,
  LetterProfileStyle,
  LetterTimeStyle,
  LetterDetailContentStyle,
  EditClickBtnStyle,
  DeleteClickBtnStyle,
  BtnsStyle,
  LetterContentTextStyle,
} from "./styles";
import { updateFanLetter, deleteFanLetter } from "../Redux/modules/actions";
import { ProfileIcon } from "assets/ProfileIcon";

function FanLetterEditDelete({ letterId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const letter = useSelector((state) => {
    // 모든 팬레터를 배열로 변환하고, 특정 ID를 가진 팬레터를 찾는 로직
    const allLetters = Object.values(state.fanLetters).flat();
    console.log(Object.values(state.fanLetters).flat());
    return allLetters.find((l) => l.id === letterId);
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(letter?.content);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditClick = () => {
    setShowModal(true);
    setActionType("edit");
  };

  const handleDeleteClick = () => {
    setShowModal(true);
    setActionType("delete");
  };

  const handleConfirm = () => {
    setShowModal(false);
    if (actionType === "edit") {
      setIsEditing(true);
    } else if (actionType === "delete") {
      dispatch(deleteFanLetter(letterId));
      navigate("/");
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    dispatch(updateFanLetter(letterId, editedContent));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <FanLetterDetailStyle>
        <LetterProfileStyle>
          <ProfileIcon width="100" height="100" />
          <div>
            <p>{letter.nickname}</p>
            <LetterTimeStyle>
              {new Date(letter.sentTime).toLocaleString()}
            </LetterTimeStyle>
          </div>
        </LetterProfileStyle>
        <LetterContentTextStyle
          ref={inputRef}
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
        <BtnsStyle>
          <DeleteClickBtnStyle onClick={() => setIsEditing(false)}>
            취소
          </DeleteClickBtnStyle>
          <EditClickBtnStyle onClick={handleSave}>저장</EditClickBtnStyle>
        </BtnsStyle>
      </FanLetterDetailStyle>
    );
  }

  return (
    <FanLetterDetailStyle>
      <LetterProfileStyle>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill={letter.color}
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
        <div>
          <p>{letter.nickname}</p>
          <LetterTimeStyle>
            {new Date(letter.sentTime).toLocaleString()}
          </LetterTimeStyle>
        </div>
      </LetterProfileStyle>
      <LetterDetailContentStyle>{letter.content}</LetterDetailContentStyle>
      <BtnsStyle>
        <DeleteClickBtnStyle onClick={handleDeleteClick}>
          삭제
        </DeleteClickBtnStyle>
        <EditClickBtnStyle onClick={handleEditClick}>수정</EditClickBtnStyle>
      </BtnsStyle>
      {showModal && (
        <ValidationModal
          message={
            actionType === "edit" ? "수정하시겠습니까?" : "삭제하시겠습니까?"
          }
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </FanLetterDetailStyle>
  );
}

export default FanLetterEditDelete;
