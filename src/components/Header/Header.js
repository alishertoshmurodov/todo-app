import "./Header.css";
import { ReactComponent as SunIcon } from "../../assets/images/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../assets/images/icon-moon.svg";

function Header({ setTheme, theme }) {
  const changeThemeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header className="header">
      <h1 className="header__logo">Todo</h1>
      <div className="theme-switch" onClick={changeThemeHandler}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </div>
    </header>
  );
}

export default Header;
