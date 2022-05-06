import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper, FormWrapper, Form, ImgWrapper, Input, HeaderText, Button, SignupLink, SignupText, Image, LogoLink } from './Login.styles.js';
import GoogleIcon from 'assets/images/Google-Icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const Login = () => {
    const { loginWithGoogle, login } = useAuth();
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();
    const [visitedBefore] = useState(window.localStorage.getItem('visited'));

    const handleLoginWithGoogle = async () => {
        await loginWithGoogle().then(() => {
            navigate('/');
        });
    };

    useEffect(() => {
        window.localStorage.setItem('visited', '1');
    }, [visitedBefore]);

    const onSubmit = async ({ email, password }) => {
        await login(email, password).then(() => {
            navigate('/');
        });
    };

    return (
        <Wrapper>
            <Link to="/">
                <LogoLink />
            </Link>
            <FormWrapper>
                <HeaderText>{visitedBefore ? 'Welcome back 👋' : 'Log in'}</HeaderText>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('email')} type="email" placeholder="Email" autoFocus />
                    <Input {...register('password')} type="password" placeholder="Password" />
                    <Button type="submit">Log in</Button>
                </Form>
                <p>or</p>
                <Button google onClick={() => handleLoginWithGoogle()}>
                    <img src={GoogleIcon} alt="" /> Log in with Google
                </Button>
                <SignupText>
                    Don’t have an account? <SignupLink to="/signup">Sign up for free</SignupLink>
                </SignupText>
            </FormWrapper>

            <ImgWrapper>
                <Image />
            </ImgWrapper>
        </Wrapper>
    );
};

export default Login;
