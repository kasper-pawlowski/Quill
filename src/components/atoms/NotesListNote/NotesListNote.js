import React, { useState } from 'react';
import { Wrapper, Title, NoteMessage } from './NotesListNote.styles.js';
import { deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';

const NotesListNote = ({ note, setSelectedNote }) => {
    const [toggle, setToggle] = useState(false);

    const handleUpdate = async (id) => {
        const taskDocRef = doc(db, 'notes', id);
        try {
            await updateDoc(taskDocRef, {
                title: 'Shopping list',
                note: 'Milk, eggs, bananas, bread',
            });
        } catch (err) {
            alert(err);
        }
    };

    const handleDelete = async (id) => {
        const taskDocRef = doc(db, 'notes', id);
        try {
            await deleteDoc(taskDocRef);
        } catch (err) {
            alert(err);
        }
        deleteDoc(doc(db, 'notes', id));
    };

    return (
        <Wrapper onClick={() => setSelectedNote(note.id)} toggle={toggle}>
            <Title toggle={toggle}>{note.data.title}</Title>
            <NoteMessage>{note.data.note}</NoteMessage>
            {/* <button onClick={() => handleUpdate(note.id)}>update note</button> */}
            {/* <button onClick={() => handleDelete(note.id)}>delete note</button> */}
        </Wrapper>
    );
};

export default NotesListNote;
