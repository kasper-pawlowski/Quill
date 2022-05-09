import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    border-right: 2px solid ${({ theme }) => theme.colors.black};
`;
