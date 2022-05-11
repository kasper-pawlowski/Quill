import React, { useState, useEffect } from 'react';
import { Wrapper, Title, NoteMessage } from './NotesListNote.styles.js';
import { useCtx } from 'context/Context';

const NotesListNote = ({ note }) => {
    const { setSelectedNote, selectedNote } = useCtx();
    // const [isNote, setIsNote] = useState(false);

    // useEffect(() => {
    //     if (selectedNote === note.id) {
    //         setIsNote(true);
    //     } else {
    //         setIsNote(false);
    //     }
    // }, [note.id, selectedNote]);

    return (
        <Wrapper onClick={() => setSelectedNote(note.id)} noteId={note.id} selectedNote={selectedNote}>
            {note.data.title && (
                <Title noteId={note.id} selectedNote={selectedNote}>
                    {note.data.title}
                </Title>
            )}
            {note.data.note && <NoteMessage>{note.data.note}</NoteMessage>}
        </Wrapper>
    );
};

export default NotesListNote;
