import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper, FormWrapper, Form, ImgWrapper, Input, HeaderText, Button, SignupLink, SignupText, Image, LogoLink } from './Login.styles.js';
import GoogleIcon from 'assets/images/Google-Icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const Login = () => {
    const { loginWithGoogle, login } = useAuth();
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const handleLoginWithGoogle = async () => {
        await loginWithGoogle().then(() => {
            navigate('/');
        });
    };

    const onSubmit = async (data) => {
        await login(data.email, data.password).then(() => {
            navigate('/');
        });
    };

    return (
        <Wrapper>
            <Link to="/">
                <LogoLink />
            </Link>
            <FormWrapper>
                <HeaderText>Welcome back</HeaderText>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('email')} type="email" placeholder="Email" />
                    <Input {...register('password')} type="password" placeholder="Password" />
                    <Button type="submit">Log in</Button>
                </Form>
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
