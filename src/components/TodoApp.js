import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"
import Button from "./Button"
import TodoItems from "./TodoItems";

const _todoItems=[
    { id :1, text : 'Text 1', completed : true},
    { id :2, text : 'Text 2', completed : false},
    { id :3, text : 'Text 3', completed : true}
    
]

export default function TodoApp(){

    const [inputValue, setInputValue] = useState('') 
    const [doItems, setDoItems] = useState(_todoItems);
    const input=useRef()

    console.log(input.current)

    useEffect(()=>{
        input.current.focus()
    }, [])
    



    function handleSubmit(e){
        e.preventDefault();
        // alert('Submited')

        let Item={
             id : Date.now(), text : inputValue, completed : false
        }
        setInputValue('')
        setDoItems([...doItems, Item])
    }

 
    function cheking(id){
        const changeArray=doItems.map(item=>{
            if(item.id===id){
                item.completed=!item.completed
            }
            return item
        })  
         setDoItems(changeArray)
    }

 
 
    return(
        <div className="todoapp">
            <h3> Todo App</h3>

            <form onSubmit={handleSubmit}>
            <input type="text"
            ref={input}
             value={inputValue} 
             onChange={(e)=> setInputValue(e.target.value)} />
             <Button type='sumbit' text={'Add Item'} />
             </form>

            <ul className="ul">
                {
                    doItems.map((item,index)=>{
                        return(
                            <TodoItems key={index} item={item} onchangePass={cheking} />
                        )
                    })
                }
            </ul>

        </div>
    )
}