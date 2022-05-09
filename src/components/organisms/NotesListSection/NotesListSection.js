import React, { useState } from 'react';
import { Wrapper } from './NotesListSection.styles.js';
import NotesList from 'components/molecules/NotesList/NotesList';
import SearchBar from 'components/atoms/SearchBar/SearchBar';
import AddNote from 'components/atoms/AddNote/AddNote';

const NotesListSection = ({ setSelectedNote }) => {
    return (
        <Wrapper>
            <SearchBar placeholder="Search Notes" />
            <NotesList setSelectedNote={setSelectedNote} />
            <AddNote />
        </Wrapper>
    );
};

export default NotesListSection;
