import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText }
    case "toggleShowText":
      return { count: state.count, showText: !state.showText }
    case "DECREMENT":
      if (state.count > 0) {
        return { count: state.count - 1 }
      } else { return state }
    default: return state;
  }
};


const ReducerTutor = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, { count: 1, showText: false })

  const useRef = () => {
    navigate('/useref')
  }

  return (
    <div>
      <button onClick={useRef}>to useRef page</button>
      <h1>{state.count}</h1>
      <button onClick={() => {
        dispatch({ type: "INCREMENT" })
        dispatch({ type: "toggleShowText" })
      }}>
        increment and toggle
      </button>
      <button onClick={() => {
        dispatch({ type: "DECREMENT" })
      }}>
        decrement
      </button>
    </div>
  )
}

export default ReducerTutor