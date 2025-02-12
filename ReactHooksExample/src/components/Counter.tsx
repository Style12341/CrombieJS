import { useReducer } from "react";

type Action = {
  event: "increment" | "decrement";
  amount?: number;
}

function Counter() {
  const reducer = (state: number, action: Action) => {
    switch (action.event) {
      case "increment":
        return state + (action.amount ?? 1);
      case "decrement":
        return state - (action.amount ?? 1);
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>{count}</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", paddingBottom: "10px" }}>
        <button onClick={() => dispatch({ event: "decrement", amount: 5 })}>-5</button>
        <button onClick={() => dispatch({ event: "decrement" })}>-</button>
        <button onClick={() => dispatch({ event: "increment" })}>+</button>
        <button onClick={() => dispatch({ event: "increment", amount: 5 })}>+5</button>
      </div>
    </div>
  );
}
export default Counter;