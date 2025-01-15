// we use context to centeralise the data the is shared between components


// first we wrap the whole app in the context provider in main.js
import React, { createContext, useState } from 'react'

export const UserDataContext=createContext();

const UserContext = ({children}) => {

  const [user,setUser]=useState({
    email:"",
    fullName:{
      firstName:"",
      lastName:"",
    }
  });
  return (
    <div>
        <UserDataContext.Provider value={{user,setUser}}>
          {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext