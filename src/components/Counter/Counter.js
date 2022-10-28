import { useState } from "react";

const Counter = ({stock, initial = 1, onAdd})=>{

    const [count, setCount] = useState(initial)

    const increment = ()=>{
        if (count < stock){
            setCount(count + 1)
        }
        
    }

    const decrement = ()=>{
       if (count >1) { 
        setCount(count - 1)
        }
    }



    return(
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increment}> Sumar </button>
            <button onClick={decrement}> Restar </button>
            <button onClick={()=> onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}

export default Counter