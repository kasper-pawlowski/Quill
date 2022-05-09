import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    display: flex;
    flex-direction: column;
    overflow: auto;
    overflow-y: overlay;
`;
