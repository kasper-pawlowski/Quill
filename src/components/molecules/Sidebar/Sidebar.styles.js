import styled from 'styled-components';
import { ReactComponent as LogoImg } from 'assets/images/logo-white.svg';
import { ArrowUpOutline } from '@styled-icons/evaicons-outline/ArrowUpOutline';
import { Logout } from '@styled-icons/heroicons-solid/Logout';
import { User } from '@styled-icons/boxicons-regular/User';

export const Wrapper = styled.div`
    height: 100%;
    width: 20%;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
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

export const DefaultAvatar = styled(User)`
    width: 25px;
`;

export const ArrowIcon = styled(ArrowUpOutline)`
    width: 30px;
    transform: ${({ isOpen }) => isOpen && 'rotate(-180deg)'};
    transition-duration: 0.15s;
    margin-left: auto;
    cursor: pointer;
    z-index: 23;
`;

export const ProfileMenu = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.black1};
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
        background-color: ${({ theme }) => theme.colors.black2};
    }
`;

export const LogoutIcon = styled(Logout)`
    width: 25px;
`;
