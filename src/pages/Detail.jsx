import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FanLetterEditDelete from "../redux/components/FanletterDetail/FanLetterEditDelete";
import { __editLetter, __deleteLetter } from "../redux/modules/fanletterSlice";
import Header from "../redux/components/Header/Header";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fanLetters = useSelector((state) => state.fanletter);
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    // Redux에서 해당하는 팬레터 데이터 로드
    const foundLetter = Object.values(fanLetters)
      .flat()
      .find((l) => l.id === id);
    if (foundLetter) {
      setLetter(foundLetter);
    }
  }, [id, fanLetters]);

  const handleUpdateFanLetter = (id, newContent) => {
    dispatch(__editLetter(id, newContent));
  };

  const handleDeleteFanLetter = (id) => {
    dispatch(__deleteLetter(id));
    navigate("/");
  };

  if (!letter) {
    return <div>팬레터가 아직 없어요!</div>;
  }

  return (
    <div>
      <Header />
      <FanLetterEditDelete
        // letter={letter} //prop으로 전달할 함수들
        __editLetter={handleUpdateFanLetter}
        __deleteLetter={handleDeleteFanLetter}
        setLetter={setLetter}
        letterId={id}
      />
    </div>
  );
}

export default Detail;
