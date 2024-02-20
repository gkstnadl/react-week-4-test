import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FanLetterEditDelete from "../redux/components/FanletterDetail/FanLetterEditDelete";
import { updateFanLetter, deleteFanLetter } from "../redux/modules/fanletter";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fanLetters = useSelector((state) => state.fanletter);
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    // 로컬 스토리지(Redux)에서 해당하는 팬레터 데이터 로드
    const foundLetter = Object.values(fanLetters)
      .flat()
      .find((l) => l.id === id);
    if (foundLetter) {
      setLetter(foundLetter);
    }
  }, [id, fanLetters]);

  const handleUpdateFanLetter = (id, newContent) => {
    dispatch(updateFanLetter(id, newContent));
  };

  const handleDeleteFanLetter = (id) => {
    dispatch(deleteFanLetter(id));
    navigate("/");
  };

  if (!letter) {
    return <div>팬레터가 아직 없어요!</div>;
  }

  return (
    <div>
      <FanLetterEditDelete
        // letter={letter} //prop으로 전달할 함수들
        updateFanLetter={handleUpdateFanLetter}
        deleteFanLetter={handleDeleteFanLetter}
        setLetter={setLetter}
        letterId={id}
      />
    </div>
  );
}

export default Detail;
