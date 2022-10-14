import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
        <h1> {user.fullname} </h1>
        <p>
            {user.email}
        </p>
        
    </div>
  )
}

export default UserCard