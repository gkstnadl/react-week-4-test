import GlobalStyle from "./GlobalStyle";
import Router from "./shared/Router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../src/redux/modules/auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
