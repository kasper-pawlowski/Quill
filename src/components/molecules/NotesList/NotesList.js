import React, { useState, useEffect } from 'react';
import { Wrapper } from './NotesList.styles.js';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase';
import NotesListNote from 'components/atoms/NotesListNote/NotesListNote';
import { motion, AnimatePresence } from 'framer-motion';

const NotesList = () => {
    const [notes, setNotes] = useState([]);

    const getNotes = () => {
        const q = query(collection(db, 'notes'), orderBy('timestamp', 'desc'));
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
        <Wrapper as={motion.div} layout>
            <AnimatePresence>
                {notes.map((note) => (
                    <NotesListNote key={note.id} note={note} as={motion.div} layout tranisiton={{ duration: 0.15 }} />
                ))}
            </AnimatePresence>
        </Wrapper>
    );
};

export default NotesList;
