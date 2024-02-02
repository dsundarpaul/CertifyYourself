import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Drawer } from 'antd'

import UserProfileEdit from './UserProfileEdit'
import UserDetails from './UserDetails'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp'

import { closeUserEditDrawer } from '../../../store/global-state/actions'
import { useUserDetails } from '../../../hooks/useUserDetails'

const UserProfile = () => {

  const dispatch = useDispatch()

  const [user] = useAuthState(auth);
  const [userDetails, setUserDetails] = useState([]);

  const getDetails = (data) => setUserDetails(data);

  useEffect(() => {
    useUserDetails(getDetails, user?.uid);
  }, [user?.uid]);

  const open = useSelector(state => state.global.userEditDrawer)

  const handleProfileEditDrawerClose = () => dispatch(closeUserEditDrawer())

  return (
    <div>
      <UserDetails userData={userDetails} />

      <Drawer title="Profile Edit" placement='right' onClose={handleProfileEditDrawerClose} open={open} size='large'>
        <UserProfileEdit userDetails={userDetails} userUid={user?.uid} />
      </Drawer>
    </div>
  )
}

export default UserProfile