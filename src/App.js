import React, { useState } from 'react'
import Tableau from './component/Ajoute/tableau'
import AddUserForm from './component/forms/AddUserForm';
import EditUserForm from './component/edit/EditUserForm'
import 'react-confirm-alert/src/react-confirm-alert.css'
import './App.css';

import './component/forms/form.css';
import './component/Ajoute/list.css';
import './component/edit/edit.css';
import 'bootstrap/dist/css/bootstrap.css';



const App = () => {
  

  const usersData = []

  const [count, setCount] = useState(0);

  const [users, setUsers] = useState(usersData)
  
  const addUser = user => {
		user.id = count
		setUsers([ ...users, user ])
  }
  
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

const [ editing, setEditing ] = useState(false)

const initialFormState = { id: null, name: '', username: '' }

const [ currentUser, setCurrentUser ] = useState(initialFormState)

const editRow = user => {
  setEditing(true)
  setCurrentUser({ id: user.id, name: user.name, username: user.username })
}

const updateUser = (id, updatedUser) => {
  setEditing(false)

  setUsers(users.map(user => (user.id === id ? updatedUser : user)))
}
  
const somme=()=>{
  var tot = document.getElementById('valiny')
  let total=0;
  for(let i=0;i<users.length;i++){
      total=total+parseInt(users[i].username);
  }
   let a=[total]

  var numberFormat = new Intl.NumberFormat("es-ES");
  var formatted = a.map(numberFormat.format);
  tot.innerHTML = formatted
  return formatted.join("; ")
  }

  return (
    <div className="container">
    <div className="flex-row red"></div>
      <div className="flex-row">
      {editing ? (
        <div id="opaciti">
          <div id="popup">
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
        </div>
        </div>):
        (<p></p>)
      }
        <div className="flex-large">
          <AddUserForm addUser={addUser} setCount={setCount} count={count}/>
        </div>
        <div className="flex-large">
          <Tableau users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
        <div className="resulta" >
          <div id="total">
          <button  onClick ={()=>{somme()}} className="btn btn-primary withMarg">TOTAL</button>
          </div>
          <br/>
          <div id="border"><p className="pp">TOTAL = &nbsp;&nbsp;<span id="valiny"> </span>&nbsp;&nbsp;Ar</p></div>
          </div> 
        <div>
          
        </div>
      </div>
    </div>
  )
  
}

export default App;
