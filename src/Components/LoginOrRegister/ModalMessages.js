import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, clearSuccessMessage } from "../../redux/actions";
import styled from "styled-components";

export const ModalMessages = () => {
  const authError = useSelector((state) => state.currentAuthUser.authError);
  const successRegister = useSelector(
    (state) => state.currentAuthUser.currentRegisterUser
  );

  const dispatch = useDispatch();
  return (
    <div>
      {authError ? (
        <ModalWindowContainer>
          <ErrorMessage>
            <p>There was an error:</p>
            <p>{authError}</p>
            <p>Try again!</p>
          </ErrorMessage>
          <AgreeButtonWrapper>
            <AgreeButton onClick={() => dispatch(clearErrorMessage())}>
              OK
            </AgreeButton>
          </AgreeButtonWrapper>
        </ModalWindowContainer>
      ) : null}
      {successRegister ? (
        <ModalWindowContainer>
          <p>Successful registration! Now you need to log into your account.</p>
          <AgreeButtonWrapper>
            <AgreeButton onClick={() => dispatch(clearSuccessMessage())}>
              OK
            </AgreeButton>
          </AgreeButtonWrapper>
        </ModalWindowContainer>
      ) : null}
    </div>
  );
};

const ModalWindowContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #deebfb;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  text-align: center;
  font-weight: 900;
`;

const ErrorMessage = styled.div`
  margin-top: 22%;
  & > p:first-child {
    font-weight: 400;
    margin: 15px 0;
  }
  & > p:last-child {
    font-weight: 400;
    margin: 15px 0;
  }
`;

const AgreeButtonWrapper = styled.div`
  margin-top: 30px;
`;

const AgreeButton = styled.button`
  padding: 12px 25px 8px;
  font-family: "Spartan";
  color: #fff;
  background: #2d9cdb;
  border-radius: 15px;
  box-sizing: border-box;
  border: 1px solid transparent;
  transition: all 350ms linear;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #2d9cdb;
    border: 1px solid #2d9cdb;
    transition: all 350ms linear;
  }
`;
