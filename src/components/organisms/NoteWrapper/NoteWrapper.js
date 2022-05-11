import React, { useState, useEffect, useCallback } from 'react';
import { Wrapper, NoteTitle, NoteMessage, Center, Form, Button } from './NoteWrapper.styles.js';
import { db } from '../../../firebase';
import { doc, getDoc, deleteDoc, updateDoc, Timestamp } from 'firebase/firestore';
import { useCtx } from 'context/Context';
import { useForm } from 'react-hook-form';

const NoteWrapper = () => {
    const [note, setNote] = useState([]);
    const { selectedNote, setSelectedNote } = useCtx();
    const { register, handleSubmit, setValue, watch } = useForm();
    const dt = new Date();

    const getDate = () => {
        const locale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language;
        const time = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const day = dt.getDay();
        // const month = dt.getMonth();
        const month = dt.toLocaleDateString(locale, { month: 'short' });
        const year = dt.getFullYear();
        const Date = `${day} ${month} ${year}, ${time}`;
        return Date;
    };

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

        // console.log(note);

        selectedNote && getNote();
    }, [selectedNote, note, setSelectedNote]);

    // const handleUpdate = async ({ title, note }, selectedNote) => {
    //     const taskDocRef = doc(db, 'notes', selectedNote);
    //     try {
    //         await updateDoc(taskDocRef, {
    //             title: title,
    //             note: note,
    //             timestamp: Timestamp.now(),
    //             date: getDate(),
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const handleUpdate = useCallback(
        async ({ title, note }, selectedNote) => {
            const taskDocRef = doc(db, 'notes', selectedNote);
            try {
                await updateDoc(taskDocRef, {
                    title: title,
                    note: note,
                    timestamp: Timestamp.now(),
                    date: getDate(),
                });
            } catch (err) {
                console.log(err);
            }
        },
        [getDate]
    );

    const handleDelete = async (selectedNote) => {
        const taskDocRef = doc(db, 'notes', selectedNote);
        try {
            await deleteDoc(taskDocRef);
        } catch (err) {
            console.log(err);
        }
        deleteDoc(doc(db, 'notes', selectedNote));
    };

    useEffect(() => {
        setValue('title', note.title);
        setValue('note', note.note);
    }, [note.note, note.title, setValue]);

    React.useEffect(() => {
        const subscription = watch(handleSubmit(({ title, note }) => handleUpdate({ title, note }, selectedNote)));
        return () => subscription.unsubscribe();
    }, [handleSubmit, handleUpdate, selectedNote, watch]);

    return selectedNote && note ? (
        <Wrapper>
            <Form>
                <NoteTitle {...register('title')} maxLength="50" />
                <NoteMessage {...register('note')} maxLength="50" />
                {note.date && <p>Last updated: {note.date}</p>}
                <button onClick={() => handleDelete(selectedNote)}>delete note</button>
            </Form>
        </Wrapper>
    ) : (
        <Center>
            <p>Click Note to Edit</p>
        </Center>
    );
};

export default NoteWrapper;
