import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increament, decreament } from "./Redux/Actions";

function App(props) {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.count);

  return (
    <div className=" App-div ">
      <h1>CLICK ME</h1>
      <h1>{select}</h1>
      <button
        onClick={() => {
          dispatch(increament);
        }}
      >
        INCREAMENT
      </button>
      <button
        onClick={() => {
          dispatch(decreament);
        }}
      >
        DECREAMENT
      </button>
    </div>
  );
}

export default App;
