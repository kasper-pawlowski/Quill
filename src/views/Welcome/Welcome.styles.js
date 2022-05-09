import styled, { keyframes } from 'styled-components';
import { ReactComponent as Svg } from 'assets/images/group-12.svg';
import { ReactComponent as LogoImg } from 'assets/images/logo-black.svg';
import { Link } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

const shake = keyframes`
    0% {
        transform: rotate(0deg)
    }
    25% {
        transform: rotate(2deg)
    }
    75% {
        transform: rotate(-2deg)
    }
    0% {
        transform: rotate(0deg)
    }
`;

export const WelcomeWrapper = styled(Div100vh)`
    width: 100%;
    padding-top: 15px;
    display: flex;
    justify-content: center;
    @media (max-width: 750px) {
        padding-bottom: 50px;
        overflow: hidden;
    }
`;

export const Wrapper = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1100px) {
        width: 100%;
        padding: 0 5%;
    }
`;

export const Nav = styled(Link)`
    width: fit-content;
`;

export const Logo = styled(LogoImg)``;

export const Hero = styled.div`
    display: flex;
    margin-top: 40px;

    h1 {
        font-size: 52px;
    }

    p {
        margin-top: 10px;
        color: ${({ theme }) => theme.colors.grey1};
        font-size: 16px;
        font-weight: 500;
    }

    @media (max-width: 750px) {
        flex-direction: column;
        margin-top: 10px;
        height: 100%;
    }
`;

export const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    @media (max-width: 750px) {
        flex: 0;
        margin: ${({ picture }) => picture && 'auto 0'};
    }
`;

export const Picture = styled(Svg)`
    width: 100%;
    height: auto;
    @media (max-width: 750px) {
        margin-top: auto;
        margin-bottom: auto;
        max-height: 400px;
    }
    #head {
        animation: ${shake} linear 4s infinite;
        transform-origin: center;
    }
`;

export const LinksWrapper = styled.div`
    width: fit-content;
    margin-top: 80px;
    display: flex;
    align-items: center;
    gap: 10px;
    @media (max-width: 750px) {
        margin-top: auto;
        align-self: center;
    }
`;

export const GetStaredLink = styled(Link)`
    background-color: ${({ theme }) => theme.colors.black};
    display: block;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    border-radius: 10px;
    padding: 12px 0;
    font-size: 18px;
    position: relative;
    transition-duration: 0.15s;
    width: 140px;
    display: flex;
    justify-content: center;
    white-space: nowrap;

    &::before {
        transition-duration: 0.15s;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        background: none;
        border: 3px solid ${({ theme }) => theme.colors.black};
        border-radius: 10px;
        bottom: -10px;
        right: -10px;
    }

    &:hover::before {
        bottom: 0;
        right: 0;
    }
`;

export const LoginLink = styled(Link)`
    font-weight: 600;
    font-size: 18px;
    width: 140px;
    display: flex;
    justify-content: center;
    padding: 12px 0;
`;

export const ImageWrapper = styled.div`
    height: 100%;
    margin-top: 50px;
    overflow: hidden;

    img {
        width: 100%;
        border: 3px solid ${({ theme }) => theme.colors.black};
        border-radius: 50px;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }

    @media (max-width: 750px) {
        display: none;
    }
`;
