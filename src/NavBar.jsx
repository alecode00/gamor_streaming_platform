import { useState } from "react";
import { Home } from "./components/homes_components/Home";
import { LogIn } from "./components/logIn_components/LogIn";



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


  return (
    <>
       <header>
        <a href="/" onClick={toPage("home")}>
          Home
        </a>
        <a href="/log" onClick={toPage("log")}>
          Log
        </a>
        <a href="/register" onClick={toPage("register")}>
          Register
        </a>
      </header>
      {getContent()}
    
    
    
    </>
  )
}
