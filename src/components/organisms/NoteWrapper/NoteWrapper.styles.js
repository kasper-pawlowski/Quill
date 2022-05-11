import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Wrapper = styled.div`
    flex: 1;
    height: 100%;
    padding: 30px;
`;

export const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const NoteTitle = styled(TextareaAutosize)`
    font-size: 36px;
    font-weight: 600;
    resize: none;
    border: none;
    outline: none;
    height: fit-content;
`;

export const NoteMessage = styled(TextareaAutosize)`
    font-size: 18px;
    font-weight: 500;
    resize: none;
    border: none;
    outline: none;
`;

export const Button = styled.button`
    padding: 15px 20px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    font-size: 20px;
`;
