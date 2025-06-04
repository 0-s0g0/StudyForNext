import React,{ useState,useReducer } from "react";
//useState
const Counter = () => {
    const[count,setcount]=useState(0);

    return(
        <>
            count:{count}
            <button onClick={()=>setcount(count-1)}>-</button>
            <button onClick={()=>setcount(count+1)}>+</button>
        </>
    )


}
//useReducer

type Action = 'increment' | 'decrement'| 'reset'| 'double';


const reducefunc=(currentCount:number, action:Action)=> {
    switch (action) {
        case 'increment':
            return currentCount + 1;
        case 'decrement':
            return currentCount - 1;
        case 'reset':
            return 0;
        case 'double':
            return currentCount * 2;
        default:
            throw new Error('Unknown action');
    }
    
}


const Counter2 = () => {

    const[count,dispatch]=useReducer(reducefunc, 0);

    return(
        <>
            count:{count}
            <button onClick={()=>dispatch('increment')}>+</button>
            <button onClick={()=>dispatch('decrement')}>-</button>
            <button onClick={()=>dispatch('double')}>*2</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </>
    )


}

export { Counter, Counter2 };