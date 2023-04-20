import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Posts></Posts>
    </div>
  );
}
function Posts (){
  const [posts, setPosts] = useState([]);
  
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return (
    <div>
      <h2>All Posts</h2>
      <p>{posts.length}</p>
      {
        posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>ID: {post.id}</p>
          </div>
        ))
      }
    </div>
  )
}
// function post(props){
//   return (
//     <div>
//       {/* <h2>Title: {props.title}</h2> */}
//     </div>
//   )
// }
export default App;
