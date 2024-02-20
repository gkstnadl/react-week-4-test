import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../src/redux/modules/auth";
import { fetchFanLetters } from "../src/redux/modules/fanletter";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(fetchFanLetters());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
