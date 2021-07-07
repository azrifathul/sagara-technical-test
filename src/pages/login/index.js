import { useHistory } from "react-router-dom";
import { useState } from "react";

import FieldInput from "../../components/fieldInput";
import Button from "../../components/button";
import { emailValidationHandler } from "../../helpers/validation";

import "./styles.scss";

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const goToRegisterHandler = () => {
    history.push("/register");
  };

  const validationForm = () => {
    const objTemp = {};

    const objToArr = Object.keys(formData);
    objToArr.forEach((field) => {
      if (formData[field] === "") {
        objTemp[field] = `Field ${field} is required!`;
      } else {
        objTemp[field] = "";
      }
    });

    if (!emailValidationHandler(formData) && !objTemp.email) {
      objTemp.email = "Invalid field email!";
    }

    setErrors({ ...objTemp });

    if (!objTemp.email && !objTemp.password) {
      console.log("data ==>", formData);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validationForm();
  };

  const changeInputValueHandler = ({ value, inputName }) => {
    const objTemp = { ...formData };
    objTemp[inputName] = value;
    setFormData({ ...objTemp });
  };

  return (
    <div className="container">
      <div className="login-body__container">
        <div className="image-container">
          <img
            src="http://res.cloudinary.com/dfh39qfib/image/upload/v1625580976/drjqqkshyoeja431rl9m.svg"
            className="image"
          />
        </div>

        <div className="form-container">
          <form onSubmit={submitHandler}>
            <h2 className="title">Sign in</h2>
            <FieldInput
              type="text"
              iconName="fa-envelope"
              placeholder="Email"
              onChangeHandler={changeInputValueHandler}
              inputName="email"
              value={formData.email}
              errors={errors}
            />
            <FieldInput
              type="password"
              iconName="fa-lock"
              placeholder="Password"
              onChangeHandler={changeInputValueHandler}
              inputName="password"
              value={formData.password}
              errors={errors}
            />
            <Button buttonName="Submit" />

            <p class="text">Doesn't have any account?</p>
            <p class="register-text" onClick={goToRegisterHandler}>
              Register
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
