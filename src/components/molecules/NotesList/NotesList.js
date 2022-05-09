import React, { useState, useEffect } from 'react';
import { Wrapper } from './NotesList.styles.js';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase';
import NotesListNote from 'components/atoms/NotesListNote/NotesListNote';

const NotesList = ({ setSelectedNote }) => {
    const [notes, setNotes] = useState([]);

    const getNotes = () => {
        const q = query(collection(db, 'notes'), orderBy('created', 'desc'));
        onSnapshot(q, (querySnapshot) => {
            setNotes(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        });
    };

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <Wrapper>
            {notes.map((note) => (
                <NotesListNote key={note.id} note={note} setSelectedNote={setSelectedNote} />
            ))}
        </Wrapper>
    );
};

export default NotesList;
