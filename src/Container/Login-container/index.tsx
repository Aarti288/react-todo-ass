import "../Login-container/style.css";

import LoginHeader from "../../Components/Login Header";
import LoginHeader2 from "../../Components/Login Header2";
import ForgotPassword from "../../Components/Forgot Password";
import DontHaveAccount from "../../Components/DontHaveAccount";

import FormLabel from "../../Components/Common Component/Form  Label";
import { loginAction } from "../../actions";
import { connect } from "react-redux";
import Btn from "../../Components/Common Component/Form button";
import FormInputBox from "../../Components/Common Component/Form Input Field";
import { useState } from "react";

import { AccountType } from "../../Types";

import { loginUser } from "../../services/service";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function LoginContainer(props: any) {
  let errors: AccountType = {
    Fullname: "",
    Date: "",
    Email: "",
    password: "",
    conpassword: "",
  };
  let emaillabel = "Email or Phone";
  let Passwordlabel = "Password";

  let btnTitle = "Login";

  let Loginheader = "Login";
  let loginheader2 = "Please login to your account";
  let forgotPassword = "Forgot Password?";
  let donthaveaccount = "Dont't have an account?";
  let createaccount = "Create an Account";

  let initialValues: AccountType = {
    Fullname: "",
    Date: "",
    Email: "",
    password: "",
    conpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const [formErrors, setFormErrors] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const UserLoginData = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const test: AccountType[] = await loginUser({
      email: formValues.Email,
      password: formValues.password,
    });
    // console.log(test);
    // console.log(test[0]);

    if (test.length != 0) {
      props.loginAction(test[0]);
      navigate("/Dashboradview");
    } else {
      alert("Invalid user");
    }
  };

  const validate = (values: AccountType) => {
    if (!values.Email) {
      // console.log(">>>>>>>>>>>>>", !values.Email);
      errors.Email = "Email should not be empty";
    }

    if (!values.password) {
      // console.log(">>>>>>>>>>>>>", values.Email);
      errors.password = "password should not be empty!";
    }
    return errors;
  };

  return (
    <form onSubmit={UserLoginData} className="Login-container">
      <LoginHeader Loginheader={Loginheader} />
      <LoginHeader2 loginheader2={loginheader2} />

      <FormLabel formlabel={emaillabel} />
      <FormInputBox
        placeholder="Enter Email"
        name="Email"
        type="Email"
        value={formValues.Email}
        onChange={handleChange}
      />

      <p className="form-error">{formErrors.Email}</p>

      <FormLabel formlabel={Passwordlabel} />
      <FormInputBox
        placeholder="Enter password"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleChange}
      />

      <p className="form-error">{formErrors.Email}</p>

      <ForgotPassword forgotPassword={forgotPassword} />

      <Btn btnTitle={btnTitle} />
      <DontHaveAccount donthaveaccount={donthaveaccount} />

      <DontHaveAccount createaccount={createaccount} />
    </form>
  );
}
const mapDispatchtoprops = (dispatch: any) => ({
  loginAction: (data: AccountType) => dispatch(loginAction(data)),
});

export default connect(null, mapDispatchtoprops)(LoginContainer);
