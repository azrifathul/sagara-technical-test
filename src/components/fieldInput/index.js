import "./styles.scss";

const FieldInput = ({
  type,
  placeholder,
  iconName,
  onChangeHandler,
  inputName,
  value,
  errors,
}) => {
  return (
    <div className="input-field-container">
      <i className={`fas ${iconName} icon-input`}></i>
      <input
        type={type}
        placeholder={placeholder}
        className={`input-field ${errors[inputName] ? "error-input" : ""}`}
        onChange={(e) => onChangeHandler({ value: e.target.value, inputName })}
        value={value}
      />
      {errors[inputName] !== "" && (
        <div className="error-text">{errors[inputName]}</div>
      )}
    </div>
  );
};

export default FieldInput;
