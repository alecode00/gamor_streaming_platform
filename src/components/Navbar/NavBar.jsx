import { Home } from "../Home/Home";
import { LogIn } from "../logIn_components/LogIn";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Register = () => <h1>Register Page</h1>;

export const NavBar = () => {

  const handleFalseLink = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header>
        <BrowserRouter >
        <section>
          <NavLink to="/">
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

        <section>
          <p>Gamor</p>
        </section>
        <section>
          <NavLink to="/log">
            Log
          </NavLink>
          <NavLink to="/register">
            Register
          </NavLink>
        </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </BrowserRouter >

      </header>
      {/* {getContent()} */}
    </>
  );
};
