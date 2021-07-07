import { useState, useEffect } from "react";

import FieldInput from "../../components/fieldInput";
import Button from "../../components/button";
import Select from "../../components/select";
import { emailValidationHandler } from "../../helpers/validation";

import { dummyCitiesLocation, dummyProvinceLocation } from "./const";
import "./styles.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    province: "",
    city: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    province: "",
    city: "",
  });

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

  const onChangeProvienceHandler = (e) => {
    setFormData({ ...formData, province: e.target.value });
  };

  const onChangeCityHandler = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };

  useEffect(() => {
    const location = dummyCitiesLocation.filter((location) => {
      return location.province === formData.province;
    });
    if (location.length) {
      setFormData({ ...formData, cities: location[0].cities });
    }
  }, [formData.province]);

  return (
    <div className="container">
      <div className="register-body__container">
        <div className="form-container">
          <form onSubmit={submitHandler}>
            <h2 className="title">Sign Up</h2>
            <FieldInput
              type="text"
              iconName="fa-user"
              placeholder="First Name"
              onChangeHandler={changeInputValueHandler}
              inputName="firstName"
              value={formData.firstName}
              errors={errors}
            />
            <FieldInput
              type="text"
              iconName="fa-user"
              placeholder="Last Name"
              onChangeHandler={changeInputValueHandler}
              inputName="lastName"
              value={formData.lastName}
              errors={errors}
            />
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
            <FieldInput
              type="text"
              iconName="fa-user"
              placeholder="Jenis Kelamin"
              onChangeHandler={changeInputValueHandler}
              inputName="gender"
              value={formData.gender}
              errors={errors}
            />
            <Select
              iconName="fa-map-marked"
              placeholder="Please Select Province"
              list={dummyProvinceLocation}
              onChangeHandler={onChangeProvienceHandler}
              value={formData.province}
              errors={errors}
              selectName="province"
            />
            {formData.cities && (
              <Select
                iconName="fa-map-marker-alt"
                placeholder="Please Select City"
                list={formData.cities}
                onChangeHandler={onChangeCityHandler}
                value={formData.city}
                errors={errors}
                selectName="city"
              />
            )}

            <Button buttonName="Submit" />
          </form>
        </div>
        <div className="image-container">
          <img
            src="http://res.cloudinary.com/dfh39qfib/image/upload/v1625580976/drjqqkshyoeja431rl9m.svg"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
