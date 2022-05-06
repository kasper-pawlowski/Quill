import styled from 'styled-components';
import { ReactComponent as LogoImg } from 'assets/images/logo-black.svg';
import { Link } from 'react-router-dom';
import Div100vh from 'react-div-100vh';
import { ReactComponent as Img } from 'assets/images/pixeltrue-plan.svg';

export const Wrapper = styled(Div100vh)`
    width: 100%;
    display: flex;
    @media (max-width: 750px) {
    }
`;

export const LogoLink = styled(LogoImg)`
    position: absolute;
    top: 20px;
    left: 20px;
`;

export const FormWrapper = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 0 12%;
    @media (max-width: 1400px) {
        padding: 0 8%;
    }

    @media (max-width: 1100px) {
        width: 100%;
        padding: 0 15%;
    }

    @media (max-width: 750px) {
        width: 100%;
        padding: 0 5%;
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const HeaderText = styled.p`
    font-weight: 600;
    font-size: 52px;
    align-self: start;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    background: none;
    border: 3px solid #000;
    border-radius: 10px;
    padding: 15px 20px;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
`;

export const Button = styled.button`
    background-color: ${({ google }) => (google ? '#fff' : '#000')};
    color: ${({ google }) => (google ? '#000' : '#fff')};
    border: 3px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 10px;
    padding: 15px 20px;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    transition-duration: 0.15s;
    position: relative;
    cursor: pointer;

    img {
        width: 30px;
    }
`;

export const LoginText = styled.p`
    color: #9e9e9e;
`;

export const LoginLink = styled(Link)`
    color: #000;
    font-weight: 600;
`;

export const ImgWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8e8e8;

    @media (max-width: 1100px) {
        display: none;
    }

    @media (max-width: 750px) {
        display: none;
    }
`;

export const Image = styled(Img)`
    width: 50%;
    height: 100%;
`;
