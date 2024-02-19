import { useDispatch } from "react-redux";
import { setUser } from "../../redux/modules/actions";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import useUserForm from "../../redux/modules/useUserForm";

function Signup() {
  const nickname = useUserForm("");
  const email = useUserForm("");
  const password = useUserForm("");
  const dispatch = useDispatch();

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      await updateProfile(userCredential.user, {
        displayName: nickname.value,
      });
      console.log("회원가입 완료");
      dispatch(
        setUser({
          ...userCredential.user,
          displayName: nickname.value, // Redux 스토어에도 닉네임 정보 추가
        })
      );
    } catch (error) {
      console.error("회원가입 실패", error);
    }
  };

  return (
    <div>
      <h2>회원가입 페이지</h2>
      <form>
        <div>
          <label>닉네임 : </label>
          <input
            type="text"
            value={nickname.value}
            onChange={nickname.onChange}
          ></input>
        </div>
        <div>
          <label>이메일 : </label>
          <input
            type="email"
            value={email.value}
            onChange={email.onChange}
          ></input>
        </div>
        <div>
          <label>비밀번호 : </label>
          <input
            type="password"
            value={password.value}
            onChange={password.onChange}
          ></input>
        </div>
        <button onClick={signUp}>가입하기</button>
      </form>
    </div>
  );
}

export default Signup;
