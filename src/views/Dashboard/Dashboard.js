import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper } from './Dashboard.styles.js';
import { useAuth } from 'context/AuthContext';
import { Navigate } from 'react-router-dom';
import Sidebar from 'components/molecules/Sidebar/Sidebar';
import NotesListSection from 'components/organisms/NotesListSection/NotesListSection';
import NoteWrapper from 'components/organisms/NoteWrapper/NoteWrapper';

const Dashboard = () => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to="/welcome" replace />;
    }

    return (
        <Wrapper>
            <Sidebar />
            <NotesListSection />
            <NoteWrapper />
        </Wrapper>
    );
};

export default Dashboard;
