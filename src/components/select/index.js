import "./styles.scss";
import { useEffect } from "react";

const Select = ({
  iconName,
  placeholder,
  list,
  onChangeHandler,
  errors,
  selectName,
  value,
}) => {
  return (
    <div className="select-container">
      <i className={`fas ${iconName} icon`}></i>
      <select className="select-field" onChange={onChangeHandler} value={value}>
        <option selected disabled value="">
          {placeholder}
        </option>
        {list.map((location, index) => {
          return <option key={index}>{location}</option>;
        })}
      </select>
      {errors[selectName] !== "" && (
        <div className="error-text">{errors[selectName]}</div>
      )}
    </div>
  );
};

export default Select;
