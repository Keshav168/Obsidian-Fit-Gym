import {useState,useEffect} from 'react';

function Posts() {
    let [posts,setPosts]=useState([]);
    let[err,setErr]=useState(null);
    useEffect(()=>{
        //make API req(effect)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(postsList=>setPosts(postsList))
        .catch(e=>setErr(e))
    },[])
  return (
    <div>
        <h1 className="display-2 text-warning">Posts</h1>
        {
             <p className='text-danger display-3'>{err}</p>
        }
        {
        posts.length===0?<div className='spinner-border text-warning display-1'></div>:
        <table className="table">  
            <thead>
                <tr>
                    <th>UserID</th>
                    <th>ID</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map(postObj=><tr key={postObj.id}>
                        <td>{postObj.userId}</td>
                        <td>{postObj.id}</td>
                        <td>{postObj.title}</td>
                    </tr>)
                }
            </tbody>
        </table>
        }
    </div>
  )
}

export default Posts