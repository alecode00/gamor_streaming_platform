

export const MainBoardLeft = () => {
  const handleFalseLink = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div>
        <h1>start</h1>
        <h1 id="reverse">streaming</h1>
        <h1>games</h1>
        <h1>differently</h1>
        <p>
          gamor now has  <b>stream party</b> platform
        </p>
        <div>

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
