"use client"

import React, { useState } from 'react';
import LayoutRender from '../renderLayout';
import ProjectsTable from '@/components/AdminProjects/projectsTable'

const page = () => {

    return (
        <>
            <LayoutRender>
                <ProjectsTable />
            </LayoutRender>
        </>
    )
}

export default page
