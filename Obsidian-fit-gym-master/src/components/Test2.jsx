import {React,useState} from 'react'

function Test2(props) {
    let [username,setUsername]=useState('masters Coding')
    function handleUsernameChange()
    {
        setUsername('full-stack-mastery')
    }
  return (
    <div className='bg-secondary p-5 mt-5 '>
        <h1 className="lead display-1 text-warning">child</h1>
        <p className="display-4">Data recieved from parent: {props.counter}</p>
        <button className="btn btn-light" onClick={props.handleCounter}>Change parent state</button>
        <p className='fs-4'>Name: {username}</p>
        <button className="btn btn-primary " onClick={handleUsernameChange}>Change Username</button>

    </div>
  )
}

export default Test2