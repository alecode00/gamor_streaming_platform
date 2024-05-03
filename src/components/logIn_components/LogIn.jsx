import { useState } from "react";
/* import "./LogIn.css"; */

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
  }else if(isTry){
    component = <h1>Your user is not registered</h1>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsTry(true);
    usersBox.forEach((user) => {
      if (
        event.target[0].value === user.username&&
        event.target[1].value === user.email &&
        event.target[2].value === user.password 
      ) {
        setIsLogin(true);
      }
    });
  };

  return (
    <>
      <div className="container">
        {/* <div className='space space-1' ></div>
        <div className='space space-2' ></div>
        <div className='space space-3' ></div> */}
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
      </div>
      {component}

      {/* {generateLayer()} */}
    </>
  );
};
