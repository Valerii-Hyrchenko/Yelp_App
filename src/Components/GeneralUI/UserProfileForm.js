import { useFormik } from "formik";
import * as Yup from "yup";
import { ref, set } from "firebase/database";
import { database } from "../../base";
import styled from "styled-components";
import { profileInputsConfig } from "../allConfigsConst";
import { memo } from "react";
import { useSelector } from "react-redux";

const UserProfileForm = ({ handleCloseForm, changeFormDelAnim }) => {
  const { currentAuthUser } = useSelector((state) => state.currentAuthUser);

  let initialValues = {
    name: "",
    surname: "",
    age: "",
    deliveryAddress: "",
    phoneNumber: "",
    email: "",
  };

  const { handleSubmit, handleChange, values, errors, handleBlur } = useFormik({
    initialValues: initialValues,
    validationSchema: userProfileYupScheme,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      const { name, surname, age, deliveryAddress, phoneNumber, email } =
        values;
      set(
        ref(
          database,
          `usersProfileInfo/${currentAuthUser ? currentAuthUser.uid : null}`
        ),
        {
          0: {
            id: "profileName",
            value: name,
            fieldTitle: "User's first name:",
          },
          1: {
            id: "profileSurname",
            value: surname,
            fieldTitle: "User's last name:",
          },
          2: {
            id: "profileAge",
            value: age,
            fieldTitle: "User's age:",
          },
          3: {
            id: "ProfileAddress",
            value: deliveryAddress,
            fieldTitle: "Delivery address:",
          },
          4: {
            id: "profilePhone",
            value: phoneNumber,
            fieldTitle: "Phone number:",
          },
          5: {
            id: "profileEmail",
            value: email,
            fieldTitle: "Email for delivery orders:",
          },
        }
      )
        .then(() => {
          handleCloseForm();
          console.log("update success"); //modal message
        })
        .catch((error) => {
          console.log("update error :>> ", error); //modal message
        });
      resetForm(values);
    },
  });
  return (
    <UserProfileFormWrap changeFormDelAnim={changeFormDelAnim}>
      <UserProfileFormTitle>Fill in to change your data</UserProfileFormTitle>
      <ProfileForm onSubmit={handleSubmit}>
        {profileInputsConfig.map(({ id, label, name, placeholder, type }) => (
          <InputWrapper key={id}>
            <ProfileLabel htmlFor={id}>
              {errors[name] ? (
                <ErrorMessage>{errors[name]}</ErrorMessage>
              ) : null}
              {label}
            </ProfileLabel>
            <ProfileInput
              onChange={handleChange}
              onBlur={handleBlur}
              name={name}
              value={values[name]}
              id={id}
              type={type}
              placeholder={placeholder}
              autoComplete="off"
            />
          </InputWrapper>
        ))}
        <ButtonsFlexWrap>
          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button type="button" onClick={handleCloseForm} isCloseForm={true}>
              Close form
            </Button>
          </ButtonWrapper>
        </ButtonsFlexWrap>
      </ProfileForm>
    </UserProfileFormWrap>
  );
};

export default memo(UserProfileForm);

const NAME_SURNAME_REGEX = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const AGE_REGEX = /^(1[2-9]|[2-9]\d)$/;
const ADDRESS_REGEX = /^[^&^$%@|?!~*=+<>§]+$/;
const PHONE_REGEX =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const YUP_NAME_INPUT_SETTINGS = Yup.string()
  .required("Please, enter data")
  .trim()
  .matches(
    NAME_SURNAME_REGEX,
    "Special characters and numbers cannot be used."
  );

const YUP_AGE_INPUT_SETTINGS = Yup.string()
  .required("Please, enter age")
  .trim()
  .matches(AGE_REGEX, "Age must be a number between 12 and 100.");

const YUP_ADDRESS_INPUT_SETTINGS = Yup.string()
  .required("Please, enter delivery address")
  .trim()
  .matches(
    ADDRESS_REGEX,
    "Special characters cannot be used. Check the spelling."
  );
const YUP_PHONE_INPUT_SETTINGS = Yup.string()
  .required("Please, enter phone number")
  .trim()
  .matches(PHONE_REGEX, "Phone number must be as +99 (999) 999-99-99");
const YUP_EMAIL_INPUT_SETTINGS = Yup.string()
  .required("Please, enter e-mail")
  .trim()
  .matches(EMAIL_REGEX, "E-mail must be as mylogin@mymail.com");

const userProfileYupScheme = Yup.object({
  name: YUP_NAME_INPUT_SETTINGS,
  surname: YUP_NAME_INPUT_SETTINGS,
  age: YUP_AGE_INPUT_SETTINGS,
  deliveryAddress: YUP_ADDRESS_INPUT_SETTINGS,
  phoneNumber: YUP_PHONE_INPUT_SETTINGS,
  email: YUP_EMAIL_INPUT_SETTINGS,
});

const UserProfileFormWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #eaf1fe;
  padding: 30px;
  border: 1px solid #047fb8;
  border-radius: 35px;
  z-index: 15;
  animation-name: ${({ changeFormDelAnim }) =>
    changeFormDelAnim ? "hideForm" : "showForm"};
  animation-duration: 750ms;
  transition-timing-function: linear;

  @keyframes showForm {
    0% {
      opacity: 0;
      transform: scale(0, 0) translate(-50%, -50%);
    }
    100% {
      opacity: 1;
      transform: scale(1, 1) translate(-50%, -50%);
    }
  }

  @keyframes hideForm {
    0% {
      opacity: 1;
      transform: scale(1, 1) translate(-50%, -50%);
    }
    100% {
      opacity: 0;
      transform: scale(0, 0) translate(-50%, -50%);
    }
  }

  @media (max-width: 580px) {
    width: 310px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }

  @media (max-width: 420px) {
    width: 275px;
  }

  @media (max-width: 375px) {
    width: 250px;
  }
`;

const UserProfileFormTitle = styled.h2`
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 15px;
  color: #6b6a6a;
  text-decoration: underline;

  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

const ProfileForm = styled.form`
  padding: 20px 20px 5px;
  border: 1px solid transparent;
  border-radius: 35px;

  @media (max-width: 580px) {
    padding: 10px 10px 5px;
  }

  @media (max-width: 420px) {
    padding: 10px 0 5px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const InputWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

const ProfileLabel = styled.label`
  margin: 0 0 3px 5px;
  font-size: 12px;
  font-weight: 900;
  color: #047fb8;
`;

const ProfileInput = styled.input`
  padding: 10px 8px 10px 14px;
  box-sizing: border-box;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 16px;
  color: #6b6a6a;
  outline: none;
  animation-duration: 600ms;
  transition-timing-function: ease-in-out;

  &:focus {
    animation-name: inputFocus;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    transform: scale(1.03, 1.03);
  }

  @keyframes inputFocus {
    0% {
      box-shadow: none;
      transform: scale(1, 1);
    }
    100% {
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      transform: scale(1.03, 1.03);
    }
  }
`;

const ButtonsFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
`;

export const Button = styled.button`
  font-family: "Spartan";
  border: 1px solid transparent;
  color: #fff;
  padding: 12px 50px;
  border-radius: 15px;
  background-color: #2d9cdb;
  font-weight: 900;
  cursor: pointer;
  transition: all 350ms linear;

  &:hover {
    background-color: transparent;
    color: #6b6a6a;
    transition: all 450ms linear;
    border: 1px solid #2d9cdb;
  }

  @media (max-width: 580px) {
    padding: 12px 33px;
  }

  ${({ isCloseForm }) =>
    isCloseForm
      ? `
        padding: 12px 36px;
        background-color: #ff5454;

        @media (max-width: 580px) {
          padding: 12px 20px;
        }
      `
      : null}
`;
