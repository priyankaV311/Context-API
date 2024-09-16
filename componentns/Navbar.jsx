
import React, { useContext } from 'react'
import Button from './Button';
import { counterContext } from '../context/counter';


function Navbar() {

    let { count, setCount } = useContext(counterContext);

  return (
    <div>
        Navbar
        <Button count={count} setCount={setCount} />

    </div>
  )
}

export default Navbar