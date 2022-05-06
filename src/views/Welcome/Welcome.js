import React from 'react';
import { WelcomeWrapper, Wrapper, Hero, Picture, Column, GetStaredLink, LoginLink, ImageWrapper, Nav, Logo, LinksWrapper } from './Welcome.styles.js';
import Img from 'assets/images/Dashboard.png';
import { useMediaQuery } from 'react-responsive';

const Welcome = () => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1100px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });

    return (
        <WelcomeWrapper>
            <Wrapper>
                <Nav to="/">
                    <Logo />
                </Nav>
                <Hero>
                    <Column>
                        <h1>
                            Collect Your
                            <br />
                            Thoughts!
                        </h1>
                        <p>
                            Take notes the simple
                            <br />
                            way for free. Forever.
                        </p>
                        {!isMobile && (
                            <LinksWrapper>
                                <GetStaredLink to="/signup">Get Started</GetStaredLink>
                                <LoginLink to="/login">Login</LoginLink>
                            </LinksWrapper>
                        )}
                    </Column>
                    <Column picture>
                        <Picture />
                    </Column>
                    {isMobile && (
                        <LinksWrapper>
                            <GetStaredLink to="/signup">Get Started</GetStaredLink>
                            <LoginLink to="/login">Login</LoginLink>
                        </LinksWrapper>
                    )}
                </Hero>
                <ImageWrapper>
                    <img src={Img} alt="" />
                </ImageWrapper>
            </Wrapper>
        </WelcomeWrapper>
    );
};

export default Welcome;
