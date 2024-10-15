import React, {useState} from 'react';
import style from './stylesheets/Counter.module.css';

function Counter() {
    const [count, setCount] = useState(0);
    
    const dcr = () => {
        setCount(count - 1);
    }

    const inr = () => {
        setCount(count + 1);
    }

    const rst = () => {
        setCount(0);
    }
    
    return (
        <>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={dcr}>Decrement</button>
            <button onClick={rst}>Reset</button>
            <button onClick={inr}>Increment</button>
        </>
    );
}

export default Counter;