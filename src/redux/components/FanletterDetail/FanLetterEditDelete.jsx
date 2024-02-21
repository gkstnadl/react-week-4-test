import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ValidationModal from "../Modal/ValidationModal";
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
import { updateFanLetter, deleteFanLetter } from "../../modules/fanletter";
import { openModal, closeModal } from "../../modules/modal";
import { ProfileIcon } from "../../../assets/ProfileIcon";

function FanLetterEditDelete({ letterId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const letter = useSelector((state) => {
    return state.fanletter.letters.find((letter) => letter.id === letterId);
  });
  const { showModal, message } = useSelector((state) => state.modal);

  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(letter?.content);
  const [actionType, setActionType] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEditClick = () => {
    dispatch(
      openModal({
        message: "수정하시겠습니까?",
        showConfirmButton: true,
        showModal: true,
      })
    );
    setActionType("edit");
  };

  const handleDeleteClick = () => {
    dispatch(
      openModal({
        message: "삭제하시겠습니까?",
        showConfirmButton: true,
        showModal: true,
      })
    );
    setActionType("delete");
  };

  const handleConfirm = () => {
    if (actionType === "edit") {
      setIsEditing(true);
    } else if (actionType === "delete") {
      dispatch(deleteFanLetter(letterId));
      dispatch(
        openModal({
          message: "삭제되었습니다!",
          showConfirmButton: false,
          showModal: true,
        })
      );
      navigate("/");
    } else if (actionType === "editCompleted") {
    }
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleSave = () => {
    dispatch(updateFanLetter({ id: letterId, content: editedContent }));
    setActionType("editCompleted");
    dispatch(
      openModal({
        message: "수정이 완료되었습니다!",
        showConfirmButton: true,
        showModal: true,
      })
    );
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
        <ProfileIcon width="100" height="100" fill={letter.color} />
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
          message={message}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </FanLetterDetailStyle>
  );
}

export default FanLetterEditDelete;
