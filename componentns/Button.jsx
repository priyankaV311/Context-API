
import React, { useContext } from 'react'
import { counterContext } from '../context/counter';

function Button() {
  
    let { count, setCount } = useContext(counterContext);

   
    return (<div>
        <button onClick={() => setCount(count+1)}>Click me {count}</button>
    </div>
  )
}

export default Button