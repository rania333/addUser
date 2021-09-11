import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (name, age) => {
    setUsersList(prevState => {
      return [...prevState, {name: name, age: age, id: Math.random().toString()}]
    })
  }
  return (
      <div>
        <AddUser onAddUser={AddUserHandler} />
        <UsersList users={usersList} />
      </div>
  );
}

export default App;
