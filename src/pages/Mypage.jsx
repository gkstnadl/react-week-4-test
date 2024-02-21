import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile, deleteUserProfile } from "../redux/modules/auth";
import { openModal, closeModal } from "../redux/modules/modal";
import ValidationModal from "../redux/components/Modal/ValidationModal";
import { ProfileIcon } from "../assets/ProfileIcon";
import {
  MypageContainerStyle,
  InputProfileStyle,
  InputProfileDeleteStyle,
  ProfileNicknameStyle,
  ProfileTitleStyle,
  ProfileUpdateBtnStyle,
} from "./styles";

function Mypage() {
  const dispatch = useDispatch();
  const [imgFile, setImgFile] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const { showModal, message } = useSelector((state) => state.modal);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImgFile(e.target.files[0]);
    }
  };

  const handleProfileUpdate = async () => {
    dispatch(updateUserProfile({ imgFile, nickname: user.nickname }))
      .unwrap()
      .then(() => {
        dispatch(
          openModal({
            message: "프로필이 업데이트되었습니다.",
            showConfirmButton: false,
            showModal: true,
          })
        );
      })
      .catch((error) => {
        dispatch(
          openModal({
            message: error.message,
            showConfirmButton: false,
            showModal: true,
          })
        );
      });
  };

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const handleProfileDelete = () => {
    dispatch(deleteUserProfile())
      .unwrap()
      .then(() => {
        dispatch(
          openModal({
            message: "프로필이 삭제되었습니다.",
            showConfirmButton: false,
            showModal: true,
          })
        );
      })
      .catch((error) => {
        dispatch(
          openModal({
            message: error.message,
            showConfirmButton: false,
            showModal: true,
          })
        );
      });
  };

  if (!user) {
    return <div>로딩중...</div>;
  }

  return (
    <MypageContainerStyle>
      <ProfileTitleStyle>마이페이지</ProfileTitleStyle>
      {imgFile ? (
        <img src={URL.createObjectURL(imgFile)} alt="profile" />
      ) : user && user.avatar ? (
        <img src={user.avatar} alt="profile" />
      ) : (
        <ProfileIcon />
      )}
      <div>
        <InputProfileStyle htmlFor="profile">사진 찾아보기</InputProfileStyle>
        <InputProfileDeleteStyle onClick={handleProfileDelete}>
          삭제
        </InputProfileDeleteStyle>
      </div>
      <input
        id="profile"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <ProfileNicknameStyle>{user.nickname}</ProfileNicknameStyle>
      <p>{user.userId}</p>
      <ProfileUpdateBtnStyle onClick={handleProfileUpdate}>
        프로필 업데이트
      </ProfileUpdateBtnStyle>
      {showModal && (
        <ValidationModal
          message={message}
          onConfirm={handleModalClose}
          onCancel={handleModalClose}
          showConfirmButton={false}
        />
      )}
    </MypageContainerStyle>
  );
}

export default Mypage;
