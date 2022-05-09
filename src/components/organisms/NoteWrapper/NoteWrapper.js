import React, { useState, useEffect } from 'react';
import { Wrapper, Title, NoteMessage, Center } from './NoteWrapper.styles.js';
import { db } from '../../../firebase';
import { doc, getDoc, collection, onSnapshot, query, where, getDocs } from 'firebase/firestore';

const NoteWrapper = ({ selectedNote }) => {
    const [note, setNote] = useState([]);

    useEffect(() => {
        const getNote = async () => {
            const docRef = doc(db, 'notes', selectedNote);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setNote(docSnap.data());
            } else {
                console.log('No such document!');
            }
        };

        selectedNote && getNote();
    }, [selectedNote]);

    return selectedNote ? (
        <Wrapper>
            <Title>{note.title}</Title>
            <NoteMessage>{note.note}</NoteMessage>
        </Wrapper>
    ) : (
        <Center>
            <p>Click Note to Edit</p>
        </Center>
    );
};

export default NoteWrapper;
