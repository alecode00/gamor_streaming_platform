const hours_left = 11;
const minutes_left = 45;
export const MainBoardCenter = () => {
  return (
    <>
      <div>
        <h2>Fornite New Season</h2>
        <p id="join" >Join Live Stream</p>
        <div className="clock_container">
          <p className="time_left" >
            {hours_left} : {minutes_left}{" "}
          </p>
        </div>
      </div>
    </>
  );
};
