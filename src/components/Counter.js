import { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";

export default function Counter({ startValue, increase }) {
  const [number, setNumber] = useState(startValue ? startValue : 0);

  useEffect (()=>{
    if(startValue){
        setNumber(startValue)
    }
    else{
        setNumber(0)
    }
  }, [startValue])

//   useEffect(()=>{
//     var interval=setInterval(()=>{
//         setNumber(a=>a + 1)
//     }, 1000)
//     return(
//         ()=>{
//             clearInterval(interval)
//         }
//     )

//   })
 

  return (
    <div className="counter">
      <h3> Counter</h3>
      <p>{number}</p>
      <Button
        onClick={() => setNumber(number + (increase || 10))}
        text={"increase"}
      />
    </div>
  );
}
