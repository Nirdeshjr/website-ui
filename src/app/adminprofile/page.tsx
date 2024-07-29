import React from 'react';
import LayoutRender from '../renderLayout';
import ProfileCards from '@/components/AdminProfile/profileCards';

const Profile = () => {
  return (
    <LayoutRender>
        <ProfileCards/>
    </LayoutRender>
  );
};

export default Profile;