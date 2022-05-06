import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper, FormWrapper, Form, ImgWrapper, Input, HeaderText, Button, LoginLink, LoginText, Image, LogoLink } from './Signup.styles.js';
import GoogleIcon from 'assets/images/Google-Icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const Signup = () => {
    const { loginWithGoogle, createUser } = useAuth();
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const steps = [1, 2, 3];

    const handleLoginWithGoogle = async () => {
        await loginWithGoogle().then(() => {
            navigate('/');
        });
    };

    const onSubmit = async ({ email, password, displayName }) => {
        await createUser(email, password, displayName).then(() => {
            navigate('/');
        });
    };

    return (
        <Wrapper>
            <Link to="/">
                <LogoLink />
            </Link>
            <FormWrapper>
                <HeaderText>Sign up</HeaderText>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('displayName')} type="text" placeholder="Display name" autoFocus />
                    <Input {...register('email')} type="email" placeholder="Email" />
                    <Input {...register('password')} type="password" placeholder="Password" />
                    <Button type="submit">Create account</Button>
                </Form>
                <p>or</p>
                <Button google onClick={() => handleLoginWithGoogle()}>
                    <img src={GoogleIcon} alt="" /> Sign up with Google
                </Button>
                <LoginText>
                    Already have an account? <LoginLink to="/login">Log in</LoginLink>
                </LoginText>
            </FormWrapper>

            <ImgWrapper>
                <Image />
            </ImgWrapper>
        </Wrapper>
    );
};

export default Signup;
