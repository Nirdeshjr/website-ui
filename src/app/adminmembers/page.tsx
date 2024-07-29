import React from 'react';
import MemberList from "@/components/AdminMembers/MembersLIst";
import LayoutRender from '../renderLayout';

function page() {
    return (
        <LayoutRender>
            <MemberList />
        </LayoutRender>
    )
}

export default page
