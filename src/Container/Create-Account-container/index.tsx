import "../Create-Account-container/style.css";

import { useState, useEffect } from "react";
import FormHeader from "../../Components/Login Header";
import DontHaveAccount from "../../Components/Common Component/DontHaveAccountLogin";
import FormLabel from "../../Components/Common Component/Form  Label";
import FormInputBox from "../../Components/Common Component/Form Input Field";
import Btn from "../../Components/Common Component/Form button";
import { useNavigate } from "react-router-dom";
import createNewUser from "../../services/service";
import { AccountType } from "../../Types";
import DontHaveAccountLogin from "../../Components/Common Component/DontHaveAccountLogin";

function CreateAccountContainer() {
  let errors: AccountType = {
    Fullname: "",
    Date: "",
    Email: "",
    password: "",
    conpassword: "",
  };

  let emaillabel = "Email";
  let Fullnamelabel = "Fullname";

  let Passwordlabel = "Password";
  let ConfirmPasslabel = "Confirm Password";
  let loginbtnlabel = "Create an  Account";
  let Loginheader = "Create An Account";
  let loginheader2 = "Please login to your account";

  let donthaveaccount = "Already have an account?";
  let createaccount = "Login";
  let datecorlabel = "Date of Incorporation";
  let Confirmpasslabel = "Confirm Password";
  let btnTitle = "Create Account";

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
    console.log(formValues);
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    createNewUser(formValues);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (values: AccountType) => {
    const regex = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
    if (!values.Fullname) {
      errors.Fullname = "username is required!";
    }

    if (!values.Date) {
      errors.Date = "Date is required!";
    }

    if (!values.Email) {
      errors.Email = "Email is required!";
    }

    if (!values.password) {
      errors.password = "password is required!";
    }

    if (!values.conpassword) {
      errors.conpassword = "password is required!";
    }
    return errors;
  };

  return (
    <div className="createAccount">
      <form onSubmit={handleSubmit} className="create-account-container">
        <FormHeader Loginheader={Loginheader} />

        <FormLabel formlabel={Fullnamelabel} />

        <FormInputBox
          placeholder="Enter a Username"
          type="text"
          name="Fullname"
          value={formValues.Fullname}
          onChange={handleChange}
        />
        <p className="form-error">{formErrors.Fullname}</p>

        <FormLabel formlabel={datecorlabel} />
        <FormInputBox
          placeholder="Enter a Date"
          name="Date"
          type="date"
          value={formValues.Date}
          onChange={handleChange}
        />

        <p className="form-error">{formErrors.Date}</p>

        <FormLabel formlabel={emaillabel} />
        <FormInputBox
          placeholder="Enter a Email Address"
          name="Email"
          type="email"
          value={formValues.Email}
          onChange={handleChange}
        />

        <p className="form-error">{formErrors.Email}</p>

        <FormLabel formlabel={Passwordlabel} />
        <FormInputBox
          placeholder="Enter a password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />

        <p className="form-error">{formErrors.password}</p>

        <FormLabel formlabel={Confirmpasslabel} />
        <FormInputBox
          placeholder="Enter password again"
          name="conpassword"
          type="password"
          value={formValues.conpassword}
          onChange={handleChange}
        />

        <p className="form-error">{formErrors.conpassword}</p>

        <Btn btnTitle={btnTitle} />
        <DontHaveAccountLogin donthaveaccount={donthaveaccount} />

        <DontHaveAccountLogin createaccount={createaccount} />
      </form>
    </div>
  );
}

export default CreateAccountContainer;
