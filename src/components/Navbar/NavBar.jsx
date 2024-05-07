import { useContext } from "react";
import { Home } from "../Home/Home";
import { LogIn } from "../logIn_components/LogIn";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import "./navbar.css";

const Register = () => <h1>Register Page</h1>;

export const NavBar = () => {
  const handleFalseLink = (event) => {
    event.preventDefault();
  };
  const { theme, handleTheme } = useContext(ThemeContext);

  const handleOnClick = () => {
    if (theme === "light") {
      handleTheme("dark");
    } else {
      handleTheme("light");
    }
  };

  return (
    <>
      <header className={theme} >
        <BrowserRouter>
          <div className="containerHeader">
            <section className="containerHeaderLeft">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/"
              >
                Home
              </NavLink>
              <a href="#" onClick={handleFalseLink}>
                Streams
              </a>
              <a href="#" onClick={handleFalseLink}>
                Party
              </a>
              <a href="#" onClick={handleFalseLink}>
                Premium
              </a>
            </section>

            <section className="containerHeaderCenter">
              <h3>Gamor</h3>
            </section>
            <section className="containerHeaderRight">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/log"
              >
                Sign in
              </NavLink>
              <NavLink
                id="register"
                className={({ isActive }) => (isActive ? "active" : null)}
                to="/register"
              >
                Create account
              </NavLink>
              <button id="themeButton" onClick={handleOnClick}>
                {theme == "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </section>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/log" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </header>
    </>
  );
};
