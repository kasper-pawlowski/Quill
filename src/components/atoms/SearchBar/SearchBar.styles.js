import styled from 'styled-components';

export const Input = styled.input`
    margin: 30px 30px 30px 30px;
    border: none;
    padding: 0px 10px 10px 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    font-size: 20px;
    font-weight: 600;
    transition-duration: 0.15s;

    &:focus {
        outline: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.grey2};
    }
`;
