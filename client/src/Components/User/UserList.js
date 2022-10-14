import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getallusers } from './../../js/actions/adminActions';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

const UserList = () => {
    const dispatch=useDispatch()
    useEffect(() => {
     dispatch(getallusers())
    
      
    }, [dispatch])
    const allusers=useSelector(state=>state.adminReducer.allUsers)

    return (
    <div>
        {allusers&&allusers.map(
            user=><UserCard user={user} key={user._id}/>
        )}
    </div>
  )
}

export default UserList