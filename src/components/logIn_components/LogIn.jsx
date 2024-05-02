import './LogIn.css'



export const LogIn = () => {
  

   const generateLayer = () => {
        const layer = [];
        const totalStars = 200;
        for(let i = 0; i< totalStars; i++){
            const x = Math.floor(Math.random() * 100);
            const y = Math.floor(Math.random() * 100);
            layer.push(`${x}vw ${y}vh 0 white`);
        }
          
    }


  return (
    <>
    <div className='container' >
        <div className='space space-1' ></div>
        <div className='space space-2' ></div>
        <div className='space space-3' ></div>
        <input placeholder='Enter your email' type="email" name="email" id="0" />
        <input placeholder='Enter your password' type="password" name="password" id="1" />
        <button>Log In</button>
    </div>
    {generateLayer()}
    </>
  )
}