import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut, login } from "./Redux/Reducer";
function App(props) {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.authReducer);

  return (
    <div>
      {select && (
        <div>
          <h1>HEADER</h1>
          <button
            onClick={() => {
              dispatch(logOut());
            }}
          >
            LOGOUT
          </button>
        </div>
      )}

      {!select && (
        <div>
          <input placeholder="Email" type="text" name="" id="" />
          <button
            onClick={() => {
              dispatch(login());
            }}
          >
            LOGIN
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
