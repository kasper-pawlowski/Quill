import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${({ toggle }) => (toggle ? '#000' : '#fff')};
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    gap: 10px;
    cursor: pointer;
`;

export const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
    color: ${({ toggle }) => (toggle ? '#fff' : '#000')};
`;

export const NoteMessage = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.grey2};
`;
