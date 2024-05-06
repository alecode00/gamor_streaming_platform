import { useState } from "react";
import "./LogIn.css";

const usersBox = [
  {
    username: "KDBPrime",
    email: "inge000419@gmail.com",
    password: "pueblo",
  },
  {
    username: "LM10Prime",
    email: "alcolla190400@gmail.com",
    password: "guatemala",
  },
  {
    username: "CR7Prime",
    email: "dorturtur000419@gmail.com",
    password: "cacerola",
  },
];
export const LogIn = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isTry, setIsTry] = useState(false);

  /* const generateLayer = () => {
        const layer = [];
        const totalStars = 200;
        for(let i = 0; i< totalStars; i++){
            const x = Math.floor(Math.random() * 100);
            const y = Math.floor(Math.random() * 100);
            layer.push(`${x}vw ${y}vh 0 white`);
        }
          
    } */
  let component = <h1></h1>;
  if (isLogin) {
    component = <h1>You have logged</h1>;
  } else if (isTry) {
    component = <h1>Your user is not registered</h1>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsTry(true);
    usersBox.forEach((user) => {
      if (
        event.target[0].value === user.username &&
        event.target[1].value === user.email &&
        event.target[2].value === user.password
      ) {
        setIsLogin(true);
      }
    });
  };

  return (
    <>
      {/* <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter your username"
            type="text"
            name="text"
            id="text"
          />
          <input
            placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
          />
          <input
            placeholder="Enter your password"
            type="password"
            name="password"
            id="password"
          />
          <button type="submit">Log In</button>
        </form>
      </div> */}

      <div className="grid align__item">

        <div className="register">

          {/* <svg xmlns="http://www.w3.org/2000/svg" className="site__logo" width="56" height="84" viewBox="77.7 214.9 274.7 412"><defs><linearGradient id="a" x1="0%" y1="0%" y2="0%"><stop offset="0%" stop-color="#8ceabb" /><stop offset="100%" stop-color="#378f7b" /></linearGradient></defs><path fill="url(#a)" d="M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z" /></svg> */}

          <h1>Welcome Back</h1>

          <form action="" method="post" className="form" onSubmit={handleSubmit}>

            <div className="form__field">
              <input type="username" placeholder="username" />
            </div>

            <div className="form__field">
              <input type="email" placeholder="info@mailaddress.com" />
            </div>

            <div className="form__field">
              <input type="password" placeholder="••••••••••••" />
            </div>

            <div className="form__field">
              <input type="submit" value="Sign In" />
            </div>

          </form>
          {component}
        </div>

      </div>

      {/* {generateLayer()} */}
    </>
  );
};

{/*  */ }
