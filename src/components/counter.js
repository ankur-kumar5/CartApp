import { useDispatch, useSelector } from "react-redux";
import {counterActions} from "../reducers/counterReducer";
import { useTransition } from "react";

const Counter = () => {
    const count = useSelector(state => state.counter.counter);
    const dispatch = useDispatch();

    const [isPending, startTransition] = useTransition();

    const counterHandler = action => {
        console.log(action);
        console.log(isPending);
        if (action === "increment") {
             startTransition(async () => {
                   const res = await fetch("http://localhost:8000/").then(res => res.json()).then(data => console.log(data));
                    console.log(res);
                    dispatch(counterActions.increment());
                });

        } else if (action === "decrement") {
            dispatch(counterActions.decrement());
        } else if (action === "incrementByAmount") {
            dispatch(counterActions.incrementByAmount(5));
        } else if (action === "toggleCounter") {
            dispatch(counterActions.toggleCounter());
        }
    }

    return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>

      <button disabled={isPending} onClick={() => counterHandler("increment")}>+</button>
      <button disabled={isPending} onClick={() => counterHandler("decrement")}>-</button>
      <button disabled={isPending} onClick={() => counterHandler("incrementByAmount")}>+5</button>
      <button disabled={isPending} onClick={() => counterHandler("toggleCounter")}>Toggle Counter</button>
      </div>)
};

export default Counter;
