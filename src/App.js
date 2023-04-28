import styled from "styled-components";
import "@fontsource/spartan";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { GeneralPage } from "./pages/GeneralPage";
import { Loader } from "./Components/LoginOrRegister/Loader";
import { Navigate, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const loading = useSelector((state) => state.loader.loading);
  const currentAuthUser = useSelector(
    (state) => state.currentAuthUser.currentAuthUser
  );

  return (
    <AppContainer>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<GeneralPage />} />
          <Route
            path="/login"
            element={currentAuthUser ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 53px 65px 53px 35px;
  background-color: #eaf1fe;
  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.35),
    inset 5px 5px 10px rgba(255, 255, 255, 0.35);
  border-radius: 40px;
  font-family: "Spartan";

  @media (max-width: 1410px) {
    max-width: 1200px;
    padding: 40px 45px 40px 35px;
  }

  @media (max-width: 1280px) {
    max-width: 1000px;
  }

  @media (max-width: 1080px) {
    max-width: 780px;
  }

  @media (max-width: 870px) {
    max-width: 655px;
  }

  @media (max-width: 740px) {
    max-width: 495px;
  }

  @media (max-width: 580px) {
    max-width: 390px;
    padding: 20px 25px;
  }

  @media (max-width: 475px) {
    padding: 15px;
  }

  @media (max-width: 420px) {
    max-width: 345px;
  }

  @media (max-width: 375px) {
    padding: 10px;
    max-width: 300px;
  }
`;
