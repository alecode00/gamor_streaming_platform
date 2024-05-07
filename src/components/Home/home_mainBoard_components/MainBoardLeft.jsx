import './main_board_left_components/mainBoardLeft.css'
export const MainBoardLeft = () => {
  const handleFalseLink = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="grid-container">
        <h1>start</h1>
        <h1 id="reverse">streaming</h1>
        <h1>games</h1>
        <h1>differently</h1>
        <p className="parrafo">
          gamor now has <b>stream party</b> platform
        </p>
        <div className="links">
          <a href="#" id="register" onClick={handleFalseLink}>
            Create account
          </a>
          <a href="#" id="log" onClick={handleFalseLink}>
            Sign In
          </a>
        </div>
      </div>
    </>
  );
};
