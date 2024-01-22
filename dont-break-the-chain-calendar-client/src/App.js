import { useState } from "react";
import Shop from "./Shop";
import "./styles.css";
import CalendarPage from "./CalendarPage";

export default function App() {
  const [buttonStatus, setButtonStatus] = useState(true);

  function handleStatusChange() {
    setButtonStatus((prev) => !prev);
  }

  return (
    <div className="ui-container">
      {buttonStatus ? (
        <>
          <h2 className="ui-title">Welcome to the "Don't break the chain" calendar!</h2>
          <img src="images/calendar.png" alt="calendar"/>
          <button onClick={handleStatusChange} className="ui-button">
            Log in
          </button>
        </>
      ) : (
        <>
          <button onClick={handleStatusChange} className="ui-button logout">
            Log out
          </button>
          <CalendarPage />
        </>
      )}
    </div>
  );
}