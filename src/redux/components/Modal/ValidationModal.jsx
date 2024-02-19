import {
  ModalBackdropStyle,
  ModalContentStyle,
  ModalMessageStyle,
  CancelClickBtnStyle,
  ConfirmClickBtnStyle,
} from "./styles";
import { useSelector } from "react-redux";

// showCancelButton라는 prop을 추가해 이 prop이 true일때만 표시하도록 동작
function ValidationModal({ onConfirm, onCancel, showConfirmButton = true }) {
  const { message, showModal } = useSelector((state) => state.modal);

  if (!showModal) return null;

  return (
    <ModalBackdropStyle>
      <ModalContentStyle>
        <ModalMessageStyle>{message}</ModalMessageStyle>
        <div>
          {showConfirmButton && (
            <CancelClickBtnStyle onClick={onCancel}>취소</CancelClickBtnStyle>
          )}
          <ConfirmClickBtnStyle onClick={onConfirm}>확인</ConfirmClickBtnStyle>
        </div>
      </ModalContentStyle>
    </ModalBackdropStyle>
  );
}

export default ValidationModal;
