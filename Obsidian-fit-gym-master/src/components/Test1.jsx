import React from 'react'
import Test2 from './Test2'
import {useState} from 'react'

function Test1() {
    let [counter,setCounter]=useState(100);
    function handleCounter()
    {
      setCounter(counter+1);
    }
  return (
    <div className='bg-info p-5 mt-5'>
     <h1 className="display-2">parent component</h1>
     <p className="lead fs-2 text-danger">Counter: {counter}</p>
     <button className="btn btn-warning" onClick={handleCounter}>+</button>
     <Test2 counter={counter} handleCounter={handleCounter} />

    </div>
  )
}

export default Test1;