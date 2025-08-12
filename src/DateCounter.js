import { useReducer } from "react";
const initialState = { step: 1, count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payLoad };
    case "setStep":
      return { ...state, step: action.payLoad };
    case "reset":
      return initialState;
    // if (action.type === "inc") return state + action.payLoad;
    // if (action.type === "dec") return state - action.payLoad;
    // if (action.type === "setCount") return action.payLoad;
    // return { count: 0, step: 1 };
    default:
      throw new Error("unkown action");
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(reducer, initialState);

  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payLoad: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payLoad: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;

// import { useReducer, useState } from "react";

// function reducer(state, action) {
//   console.log(state, action);
//   // Now we have to explicitly define the actions
//   if (action.type === "inc") return state + action.payLoad;
//   if (action.type === "dec") return state - action.payLoad;
//   if (action.type === "setCount") return action.payLoad;
// }

// function DateCounter() {
//   // const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const [count, dispatch] = useReducer(reducer, 0);

//   // This mutates the date object.
//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     dispatch({ type: "dec", payLoad: -1 });
//     // setCount((count) => count - 1);
//     // setCount((count) => count - step);
//   };

//   const inc = function () {
//     dispatch({ type: "inc", payLoad: 1 });
//     // setCount((count) => count + 1);
//     // setCount((count) => count + step);
//   };

//   const defineCount = function (e) {
//     // dispatch(Number(e.target.value));
//     dispatch({ type: "setCount", payLoad: Number(e.target.value) });
//   };

//   const defineStep = function (e) {
//     setStep(Number(e.target.value));
//   };

//   const reset = function () {
//     // setCount(0);
//     setStep(1);
//   };

//   return (
//     <div className="counter">
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;
