
import React, {useState} from 'react'; 
import Tweet from './Tweet'




function App(){
 const [users, setUsers]= useState([
  {name: "Ed", message:"Hello There", likes:"403"},
  {name: "john", message:"I am awesome", likes:"504"}
 ])
  const [isRed, setRed] = useState(true);
  const [count, setCount] = useState(0);
 const increment = () => {
  setCount(count+1);
  setRed(isRed)
 
 }
  return (
   
    <div className='App'>
     <h1 className= {isRed ? 'red': 'yellow'}> Change my Color </h1>
     <button onClick={(increment)}> Increment</button>
     <h1> {count}</h1>
     <Tweet name="Brian" message="I like snow" likes="4425"/> 
     {users.map(user => (
      <Tweet name={user.name} message={user.message} likes={user.likes} /> 
     ))}
     
     

     
     
      
      
      </div> 
   
   
  );
}
export default App;