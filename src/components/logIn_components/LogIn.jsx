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
  let component = <h1></h1>;
  if (isLogin) {
    component = <h1>You have logged</h1>;
  } else if (isTry) {
    component = <h1>Your user is not registered</h1>;
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
      <div className="grid align__item">
        <div className="register">
          <h1>Welcome Back</h1>
          <form
            action=""
            method="post"
            className="form"
            onSubmit={handleSubmit}
          >
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
    </>
  );
};

{
  /*  */
}
