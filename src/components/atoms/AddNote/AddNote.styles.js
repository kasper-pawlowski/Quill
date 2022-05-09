import styled from 'styled-components';
import { AddCircle } from '@styled-icons/fluentui-system-filled/AddCircle';

export const Wrapper = styled.div`
    padding: 30px;
    transition-duration: 0.15s;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: auto;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 20px;
        background: ${({ theme }) => theme.colors.white};
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
        top: -20px;
        left: 0;
    }
`;

export const Button = styled.button`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.grey2};
    font-weight: 500;
    background: none;
    padding: 25px;
    border: 2px dashed ${({ theme }) => theme.colors.grey2};
    border-radius: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition-duration: 0.15s;

    &:hover {
        border-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.black};
    }
`;

export const AddIcon = styled(AddCircle)`
    width: 30px;
`;
