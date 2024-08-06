import React from "react";
import { useState } from "react";
import './Content.css'


function Content()
{
    const [count, setCount] = useState(0);

    function incrementClick(){
        setCount(count + 1);
    }

    function decrementClick(){
        setCount(count - 1);
    }
    function resetClick(){
        setCount(0);
    }

    return(
        <>
        <h2>{count}</h2>
        <br></br>
        <button className="increment" onClick={(incrementClick)}>
          Increment
        </button>
        <button className="decrement" onClick={(decrementClick)}>
          Decrement
       </button>
       <button className="reset" onClick={(resetClick)}>
        Reset
      </button>

            
        </>       
    );
}

export default Content;