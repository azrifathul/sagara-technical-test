import { useHistory, useLocation } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const goToLogin = () => {
    history.push("/login");
  };

  return (
    <div className="header-container">
      <div className="logo">
        <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQG4P7fOuax6oQ/company-logo_200_200/0/1519863255148?e=2159024400&v=beta&t=U8SyY59EmBz9JsUZJM-l0xq2ryvqo3gHhWg325YgKkc" />
      </div>
      {location.pathname === "/register" && (
        <div className="login-text" onClick={goToLogin}>
          Login
        </div>
      )}
    </div>
  );
};

export default Header;
