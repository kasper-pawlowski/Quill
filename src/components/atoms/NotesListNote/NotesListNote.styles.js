import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${({ selectedNote, noteId, theme }) => (selectedNote === noteId ? theme.colors.black : theme.colors.white)};
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    gap: 10px;
    cursor: pointer;
`;

export const Title = styled.p`
    white-space: nowrap;
    overflow: hidden;
    font-size: 22px;
    font-weight: 600;
    color: ${({ selectedNote, noteId, theme }) => (selectedNote === noteId ? theme.colors.white : theme.colors.black)};
`;

export const NoteMessage = styled.p`
    white-space: nowrap;
    overflow: hidden;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grey2};
`;
