import Counter from "./Counter";
import { useState } from "react";

export default function CounterParent() {
  const [inputValue, setInputValue] = useState();
  const [start, setStart] = useState();

  return (
    <div className="counterparent">
      <p>{inputValue}</p>

      <input
        type="number"
        placeholder="Number Type"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={() => setStart(parseInt(inputValue))}>
        {" "}
        change start value
      </button>

      {/* {
        start  ?  : null
      } */}

      <Counter startValue={start} increase={50} />
      <Counter increase={10} />
      <Counter startValue={50} />
    </div>
  );
}
