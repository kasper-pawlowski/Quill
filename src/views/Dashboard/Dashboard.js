import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper } from './Dashboard.styles.js';
import { useAuth } from 'context/AuthContext';
import { Navigate } from 'react-router-dom';
import Sidebar from 'components/molecules/Sidebar/Sidebar';

const Dashboard = () => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/welcome" replace />;
    }

    return (
        <Wrapper>
            <Sidebar />
        </Wrapper>
    );
};

export default Dashboard;
