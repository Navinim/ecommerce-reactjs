import React from 'react'
import { isAuthenticated } from '.'

const UserDashboard = () => {
    const {user:{name,email}}=isAuthenticated()
    return (
      <>
          <h1>Name:{name}</h1>
          <h2>Email:{email}</h2>
      </>
    )
}

export default UserDashboard
