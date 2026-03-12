import { useDispatch, useSelector } from "react-redux";
import {counterActions} from "../reducers/counterReducer";

const Counter = () => {
    const count = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.showCounter)
    const dispatch = useDispatch();

    const counterHandler = action => {
        console.log(action);
        if (action === "increment") {
             dispatch(counterActions.increment());
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
      <h1>Redux Toolkit Counter Cart App EC2</h1>
      <h2>{count}</h2>
       { showCounter ?
            <div>
                <button onClick={() => counterHandler("increment")}>+</button>
                <button onClick={() => counterHandler("decrement")}>-</button>
                <button onClick={() => counterHandler("incrementByAmount")}>+5</button>
            </div>
        :
            <p style={{ color: "white" }}>No Counter to Display</p>
       }
       <br/>
      <button onClick={() => counterHandler("toggleCounter")}>Toggle Counter</button>
      </div>)
};

export default Counter;
