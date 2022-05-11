import React, { useState } from 'react';
import { Wrapper, Button, AddIcon } from './AddNote.styles.js';
import { addDoc, Timestamp, collection } from 'firebase/firestore';
import { db } from '../../../firebase';

const AddNote = () => {
    const notesRef = collection(db, 'notes');

    const createNote = async () => {
        try {
            await addDoc(notesRef, {
                title: 'Shopping list',
                note: 'Milk, eggs, bananas, bread',
                timestamp: Timestamp.now(),
            });
        } catch (err) {
            alert(err);
        }
    };

    return (
        <Wrapper>
            <Button onClick={() => createNote()}>
                <AddIcon />
                Add Note
            </Button>
        </Wrapper>
    );
};

export default AddNote;
