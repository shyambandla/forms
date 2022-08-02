import './App.css';
import axios from 'axios';
import {useState} from 'react';

function App() {


const [name, setName] = useState('');
const [password, setPassword] = useState('');



const handleSubmit = (e) => {


  e.preventDefault();

  console.log(name, password);

  const obj={
    name: name,
    age: password
  }


  // axios.get('http://localhost:5000/api/users/'+name).then(res => {
  //   console.log(res.data);
  // }).catch(err => {
  //   console.log(err);
  // });

  axios.post('http://localhost:4000/addUser', obj).then(res => {
    console.log(res.data);
  }).catch(err => {
    console.log(err);
  });



}


  return (
    <>
    <div className="background">
      <div className="loginBox">
        <form onSubmit={handleSubmit}>
        <div>
        <input type="text"  onChange={(e)=>{
          setName(e.target.value)
        }} maxLength={10} name='fullname' value={name} placeholder="Username" required/>
        </div>
        <div>
        <input onChange={(e)=>{
          setPassword(e.target.value)
        }}  type="password" name='password' placeholder="Password.." required/>
        </div>
        <div>

          <input type="submit" value="submit" />
          </div>
          </form>
        </div>

    </div>
    </>
  );
}

export default App;
