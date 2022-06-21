import { useState } from "react";

export default function Form(){
    const [state, setState] = useState('');
    const [title, setTitle] = useState('')

    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
  
    function handle(e){
        e.preventDefault()
    }

    function changetitle(){
        setTitle(state)
    }
    return(
        <form className="form" action="/submited" 
        onSubmit={handle} >

            <h2> form {title}</h2>
            <p>{state}</p>
            <input type="text" value={state} onChange={(e)=>setState(e.target.value)} />

            <input type="number" value={number1} onChange={(e)=>setNumber1(e.target.value)} />
            <input type="number" value={number2} onChange={(e)=>setNumber2(e.target.value)} />
            <p>{parseInt(number1) + parseInt(number2)}</p>



            <button type="button" onClick={changetitle} > Submit</button>
        </form>
    )
}