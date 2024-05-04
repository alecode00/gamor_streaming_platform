/* import { useState } from "react"; */
import { Home } from "../Home/Home";
import { LogIn } from "../logIn_components/LogIn";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Register = () => <h1>Register Page</h1>;

export const NavBar = () => {
  /* const [page, setPage] = useState(() => {
    const { pathname } = window.location;
    const page = pathname.slice(1);
    return page;
  }); */

  /* const getContent = () => {
    if (page === "log") {
      return <LogIn />;
    } else if (page === "register") {
      return <Register />;
    } else {
      return <Home />;
    }
  }; */

  /* const toPage = (nextpage) => (event) => {
    history.pushState(null, "", `/${nextpage}`);
    event.preventDefault();
    setPage(nextpage);
  }; */

  const handleFalseLink = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header>
        <BrowserRouter >
        <section>
          <NavLink to="/" /* onClick={toPage("home")} */>
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
          <NavLink to="/log" /* onClick={toPage("log")} */>
            Log
          </NavLink>
          <NavLink to="/register" /* onClick={toPage("register")} */>
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
