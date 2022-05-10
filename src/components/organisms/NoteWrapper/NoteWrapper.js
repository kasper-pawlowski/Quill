import React, { useState, useEffect } from 'react';
import { Wrapper, Title, NoteMessage, Center } from './NoteWrapper.styles.js';
import { db } from '../../../firebase';
import { doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useCtx } from 'context/Context';

const NoteWrapper = () => {
    const [note, setNote] = useState([]);
    const { selectedNote, setSelectedNote } = useCtx();

    useEffect(() => {
        const getNote = async () => {
            const docRef = doc(db, 'notes', selectedNote);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNote(docSnap.data());
            } else {
                setSelectedNote();
            }
        };

        selectedNote && getNote();
    }, [selectedNote, note, setSelectedNote]);

    const handleUpdate = async (selectedNote) => {
        const taskDocRef = doc(db, 'notes', selectedNote);
        try {
            await updateDoc(taskDocRef, {
                title: 'list',
                note: 'eggs, bananas, bread',
            });
        } catch (err) {
            alert(err);
        }
    };

    const handleDelete = async (selectedNote) => {
        const taskDocRef = doc(db, 'notes', selectedNote);
        try {
            await deleteDoc(taskDocRef);
        } catch (err) {
            alert(err);
        }
        deleteDoc(doc(db, 'notes', selectedNote));
    };

    return selectedNote ? (
        <Wrapper>
            <Title>{note.title}</Title>
            <NoteMessage>{note.note}</NoteMessage>
            <button onClick={() => handleUpdate(selectedNote)}>update note</button>
            <button onClick={() => handleDelete(selectedNote)}>delete note</button>
        </Wrapper>
    ) : (
        <Center>
            <p>Click Note to Edit</p>
        </Center>
    );
};

export default NoteWrapper;
