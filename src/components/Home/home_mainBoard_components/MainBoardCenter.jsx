const hours_left = 11;
const minutes_left = 45;
export const MainBoardCenter = () => {
  return (
    <>
      <div>
        <h2>Fornite New Season</h2>
        <p>Join Live Stream</p>
        <div className="time_left">
          <p>
            {hours_left} : {minutes_left}{" "}
          </p>
        </div>
      </div>
    </>
  );
};
