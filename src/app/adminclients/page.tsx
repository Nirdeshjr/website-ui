import React from 'react';
import LayoutRender from '../renderLayout';
import Clients from '@/components/AdminClients/clients';

function page() {
  return (
    <LayoutRender>
        <Clients/>
    </LayoutRender>
  )
}

export default page
