import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


// manageing users array in app.js as from here it's easy to
// communicate between add user and user list components
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    // update state by taking old list and appending new element it,
    // for this, we have to use FUNCTION form of setUserList
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    // <div>
    // <React.Fragment>
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
    // </React.Fragment>    
    // </div>
  );
}

export default App;
