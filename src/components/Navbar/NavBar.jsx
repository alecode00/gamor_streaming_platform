import { useState } from "react";
import { Home } from "../Home/Home";
import { LogIn } from "../logIn_components/LogIn";

const Register = () => <h1>Register Page</h1>;

export const NavBar = () => {
  const [page, setPage] = useState(() => {
    const { pathname } = window.location;
    const page = pathname.slice(1);
    return page;
  });

  const getContent = () => {
    if (page === "log") {
      return <LogIn />;
    } else if (page === "register") {
      return <Register />;
    } else {
      return <Home />;
    }
  };

  const toPage = (nextpage) => (event) => {
    history.pushState(null, "", `/${nextpage}`);
    event.preventDefault();
    setPage(nextpage);
  };

  const handleFalseLink = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <header>
        <section>
          <a href="/" onClick={toPage("home")}>
            Home
          </a>
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
          <a href="/log" onClick={toPage("log")}>
            Log
          </a>
          <a href="/register" onClick={toPage("register")}>
            Register
          </a>
        </section>
      </header>
      {getContent()}
    </>
  );
};
