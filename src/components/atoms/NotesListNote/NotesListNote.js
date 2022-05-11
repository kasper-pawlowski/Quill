import React from 'react';
import { Wrapper, Title, NoteMessage } from './NotesListNote.styles.js';
import { useCtx } from 'context/Context';
import { motion } from 'framer-motion';

const NotesListNote = ({ note }) => {
    const { setSelectedNote, selectedNote } = useCtx();

    return (
        <Wrapper
            onClick={() => setSelectedNote(note.id)}
            noteid={note.id}
            selectednote={selectedNote}
            as={motion.div}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}>
            {note.data.title && (
                <Title noteid={note.id} selectednote={selectedNote}>
                    {note.data.title}
                </Title>
            )}
            {note.data.note && <NoteMessage>{note.data.note}</NoteMessage>}
        </Wrapper>
    );
};

export default NotesListNote;
