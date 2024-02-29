import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __editProfile } from "../redux/modules/authSlice";
import { openModal, closeModal } from "../redux/modules/modal";
import ValidationModal from "../redux/components/Modal/ValidationModal";
import { ProfileIcon } from "../assets/ProfileIcon";
import {
  MypageContainerStyle,
  InputProfileStyle,
  ProfileNicknameStyle,
  ProfileTitleStyle,
  ProfileUpdateBtnStyle,
} from "./styles";
import Header from "../redux/components/Header/Header";

function Mypage() {
  const dispatch = useDispatch();
  const [imgFile, setImgFile] = useState(null);
  const { userId, isLogin, avatar, nickname } = useSelector(
    (state) => state.auth
  );
  const { showModal, message } = useSelector((state) => state.modal);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImgFile(e.target.files[0]);
    }
  };

  const handleProfileUpdate = async () => {
    dispatch(__editProfile({ imgFile, nickname }))
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

  if (!isLogin) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Header />
      <MypageContainerStyle>
        <ProfileTitleStyle>마이페이지</ProfileTitleStyle>
        {imgFile ? (
          <img src={URL.createObjectURL(imgFile)} alt="profile" />
        ) : avatar ? (
          <img src={avatar} alt="profile" />
        ) : (
          <ProfileIcon />
        )}
        <InputProfileStyle htmlFor="profile">사진 찾아보기</InputProfileStyle>
        <input
          id="profile"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <ProfileNicknameStyle>{nickname}</ProfileNicknameStyle>
        <p>{userId}</p>
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
    </>
  );
}

export default Mypage;
