import { Button } from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { loginPageConfig } from "../allConfigsConst";
import { registerPageConfig } from "../allConfigsConst";
import { useFormik } from "formik";
import { registerUser } from "../../redux/actions";
import { loginUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useNav } from "../../hooks/useNav";
import { ModalMessages } from "./ModalMessages";

import arrowBack from "../../assets/icons/arrow/arrow_back.svg";

export const Form = ({ pageType }) => {
  let currentSchemeValid = pageType === "login" ? loginScheme : registerScheme;
  let currentInputConfig =
    pageType === "login" ? loginPageConfig : registerPageConfig;
  let currentInitialValues =
    pageType === "login"
      ? {
          login: "",
          password: "",
        }
      : {
          name: "",
          password: "",
          confirmPassword: "",
        };
  let getCurrentDispatch = () =>
    pageType === "login" ? loginUser(values) : registerUser(values);

  const dispatch = useDispatch();
  const { goTo } = useNav();
  const { handleSubmit, handleChange, values, errors, handleBlur } = useFormik({
    initialValues: currentInitialValues,
    validationSchema: currentSchemeValid,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      dispatch(getCurrentDispatch());
      resetForm(values);
      goTo("/login");
    },
  });

  return (
    <FormWrapper>
      <FormForPage onSubmit={handleSubmit}>
        <ArrowBackImgWrap onClick={() => goTo("/")}>
          <ArrowBackImg src={arrowBack} alt="arrow_back" />
          <ArrowBackTitle>back to menu</ArrowBackTitle>
        </ArrowBackImgWrap>
        {currentInputConfig.map(({ id, label, placeholder, name, type }) => (
          <InputWrapper key={id}>
            <Label htmlFor={id}>
              {label}
              {errors[name] ? (
                <ErrorMessage>Error: {errors[name]}</ErrorMessage>
              ) : null}
            </Label>
            <InputForPage
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[name]}
              name={name}
              id={id}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
            />
          </InputWrapper>
        ))}
        <Button config={pageType === "login" ? "Login" : "Register"} />
        {pageType === "login" ? (
          <Link style={linkStyle} to="/register">
            I don't have an account
          </Link>
        ) : (
          <Link style={linkStyle} to="/login">
            Back to login page
          </Link>
        )}
      </FormForPage>
      <ModalMessages />
    </FormWrapper>
  );
};

const linkStyle = {
  display: "block",
  width: "150px",
  margin: "0 auto",
  fontWeight: "700",
  fontSize: "12px",
  lineHeight: "18px",
  color: "#000",
  textAlign: "center",
  paddingTop: "10px",
};

const FormWrapper = styled.div`
  padding: 77px 95px 55px;
  max-width: 388px;
  background-color: #fff;
  border-radius: 35px;
  margin: 17px auto 0;
  position: relative;
  z-index: 5;

  @media (max-width: 1410px) {
    padding: 60px 80px 45px;
  }

  @media (max-width: 1300px) {
    padding: 45px 65px 35px;
    margin-top: 5px;
    max-width: 360px;
  }

  @media (max-width: 950px) {
    max-width: 300px;
  }

  @media (max-width: 550px) {
    padding: 45px 35px 30px;
    max-width: 250px;
  }
  @media (max-width: 380px) {
    padding: 45px 30px 30px;
  }
`;

const FormForPage = styled.form`
  position: relative;
`;

const ArrowBackImgWrap = styled.div`
  position: absolute;
  top: -60px;
  left: -75px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ArrowBackTitle = styled.p`
  font-weight: 900;
  font-size: 12px;
  font-style: italic;
  margin-top: 3px;
`;

const ArrowBackImg = styled.img`
  width: 28px;
  margin-right: 8px;
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;

  @media (max-width: 1300px) {
    margin-bottom: 12px;
  }
`;

const InputForPage = styled.input`
  padding: 15px 10px 15px 13px;
  width: 100%;
  background: #f3f3f3;
  border-radius: 15px;
  outline: none;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-decoration-line: ${(props) =>
    props.type !== "password" ? "underline" : ""};
  color: rgb(145, 68, 68);
  box-sizing: border-box;

  &::placeholder {
    color: #cc9696;
  }

  @media (max-width: 1300px) {
    padding: 13px 10px 13px 10px;
  }

  @media (max-width: 950px) {
    padding: 12px 8px 12px 9px;
    font-size: 14px;
  }
`;

const Label = styled.label`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 3px;
`;

const ErrorMessage = styled.p`
  color: #fff;
  padding: 2px;
  border-radius: 3px;
  background: red;
  font-size: 10px;
  font-weight: 700;
`;

const PASS_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const NAME_YUP_SETTING = Yup.string()
  .required("Please, enter name")
  .trim()
  .email();

const LOGIN_YUP_SETTING = Yup.string()
  .required("Please, enter login")
  .trim()
  .email();

const PASS_YUP_SETTING = Yup.string()
  .required("Please, enter password")
  .trim()
  .matches(
    PASS_REGEX,
    "Password must be minimum eight characters, at least one letter and one number"
  );

const CONFIRM_PASS_YUP_SETTING = Yup.string()
  .required("Please, confirm password")
  .trim()
  .matches(
    PASS_REGEX,
    "Password must be minimum eight characters, at least one letter and one number"
  )
  .oneOf([Yup.ref("password")], "Your password do not match 'password' field");

const loginScheme = Yup.object({
  login: LOGIN_YUP_SETTING,
  password: PASS_YUP_SETTING,
});

const registerScheme = Yup.object().shape({
  name: NAME_YUP_SETTING,
  password: PASS_YUP_SETTING,
  confirmPassword: CONFIRM_PASS_YUP_SETTING,
});
