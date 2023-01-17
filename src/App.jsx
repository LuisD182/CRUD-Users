import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import UserList from './assets/components/UserList'
import UsersForm from './assets/components/UsersForm'

function App() {

  const [usersList, setUsersList] = useState([])
  const [userSelected, setUserSelected] = useState(null)


  useEffect(() => {
    axios
      .get(`https://users-crud.academlo.tech/users/`)
      .then(res => { setUsersList(res.data) })
  }, [])

  const getUsers = () => {
    axios
      .get(`https://users-crud.academlo.tech/users/`)
      .then(res => { setUsersList(res.data) })
  }

  const selectUser = (currentUserMap) => {
    setUserSelected(currentUserMap)
  }

  console.log(usersList);



  return (
    <div className="App">
            <UserList 
        getUsers={getUsers}
        usersList={usersList}
        selectUser={selectUser}
      />

            <UsersForm 
        usersList={usersList}
        getUsers={getUsers}
        userSelected={userSelected}
        selectUser={selectUser} />


    </div>
  )
}

export default App