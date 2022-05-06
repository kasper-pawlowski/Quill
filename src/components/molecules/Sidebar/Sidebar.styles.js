import styled from 'styled-components';
import { ReactComponent as LogoImg } from 'assets/images/logo-white.svg';
import { ArrowUpOutline } from '@styled-icons/evaicons-outline/ArrowUpOutline';
import { Logout } from '@styled-icons/heroicons-solid/Logout';

export const Wrapper = styled.div`
    height: 100%;
    width: 20%;
    background-color: #000;
    color: #fff;
    /* padding: 20px; */
    display: flex;
    flex-direction: column;
`;

export const LogoLink = styled(LogoImg)`
    margin: 20px;
`;

export const ProfileWrapper = styled.div`
    margin: auto 20px 20px 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-weight: 500;

    p {
        cursor: context-menu;
    }

    img {
        height: 30px;
        border-radius: 10px;
        cursor: pointer;
    }
`;

export const ArrowIcon = styled(ArrowUpOutline)`
    width: 30px;
    transform: ${({ isOpen }) => isOpen && 'rotate(-180deg)'};
    transition-duration: 0.15s;
    margin-left: auto;
    cursor: pointer;
`;

export const ProfileMenu = styled.div`
    width: 100%;
    background-color: #1b1b1b;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const ProfileMenuItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    transition-duration: 0.15s;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #242424;
    }
`;

export const LogoutIcon = styled(Logout)`
    width: 25px;
`;