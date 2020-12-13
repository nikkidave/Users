import logo from './logo.svg';
import './App.css';
import User from './components/User'
import {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const [users, setUsers] = useState([]);

  async function fetchUser(){ 
    const {data} = await axios.get('https://randomuser.me/api/'); //destructuring
    setUsers([...users, data.results[0]]);
  }
  useEffect(()=> fetchUser(), []); //useEffect is a lifecycle function
 
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={fetchUser}>User</button>
        {users.map((user, index)=>{
          return (<User user={user} key={index}/>);
        })}
      </header>
    </div>
  );
}

export default App;
