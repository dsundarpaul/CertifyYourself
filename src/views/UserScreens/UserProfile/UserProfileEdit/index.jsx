import React from 'react';
import { useDispatch } from 'react-redux';
import { closeUserEditDrawer } from '../../../../store/global-state/actions';
import UserProfileEditForm from './UserProfileEditForm/UserProfileEditForm';


const UserProfileEdit = ({ userDetails, userUid }) => {
  const dispatch = useDispatch();

  const handleFinish = () => {
    dispatch(closeUserEditDrawer());
  };

  return (
    <div>
      <UserProfileEditForm 
        userDetails={userDetails} 
        onFinish={handleFinish} 
        userUid={userUid}
      />
    </div>
  );
};

export default UserProfileEdit;
