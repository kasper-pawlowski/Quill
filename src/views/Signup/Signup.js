import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Wrapper, FormWrapper, Form, ImgWrapper, Input, HeaderText, Button, LoginLink, LoginText, Image, LogoLink } from './Signup.styles.js';
import GoogleIcon from 'assets/images/Google-Icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

const Signup = () => {
    const { loginWithGoogle, createUser, currentUser } = useAuth();
    const [error, setError] = useState();
    const { register, handleSubmit } = useForm();
    let navigate = useNavigate();

    const handleLoginWithGoogle = () => {
        loginWithGoogle().then(() => {
            navigate('/');
        });
    };

    const onSubmit = ({ email, password, displayName }) => {
        createUser(email, password, displayName)
            .then((res) => {
                console.log(res);
                currentUser && navigate('/');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <Wrapper>
            <Link to="/">
                <LogoLink />
            </Link>
            <FormWrapper>
                <HeaderText>Sign up</HeaderText>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('displayName')} type="text" placeholder="Display name" required />
                    <Input {...register('email')} type="email" placeholder="Email" required />
                    <Input {...register('password')} type="password" placeholder="Password" required />
                    {/* <p>Reset password</p> */}
                    <Button type="submit">Create account</Button>
                    {/* {error && <p>{error}</p>} */}
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
