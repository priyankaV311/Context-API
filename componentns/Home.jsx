import React, { useContext } from 'react'
import { counterContext } from '../context/counter';

function Home() {
    let { count, setCount } = useContext(counterContext);
  return (
    <div>
        {count}

    </div>
  )
}

export default Home