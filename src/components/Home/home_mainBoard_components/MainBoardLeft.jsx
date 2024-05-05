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
        <h5>
          gamor now has <p id="resaltado">stream party</p> platform
        </h5>
        <a href="#" onClick={handleFalseLink}>
          Create account
        </a>
        <a href="#" onClick={handleFalseLink}>
          Sign In
        </a>
      </div>
    </>
  );
};
