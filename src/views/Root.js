import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Wrapper } from 'views/Root.styles';
import { AuthProvider } from 'context/AuthContext';
import { CtxProvider } from 'context/Context';
import Welcome from 'views/Welcome/Welcome';
import Signup from 'views/Signup/Signup';
import Login from 'views/Login/Login';
import Dashboard from 'views/Dashboard/Dashboard';

const Root = () => {
    return (
        <AuthProvider>
            <CtxProvider>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <Wrapper>
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/welcome" element={<Welcome />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="*" element={<p>404</p>} />
                            </Routes>
                        </Wrapper>
                    </ThemeProvider>
                </BrowserRouter>
            </CtxProvider>
        </AuthProvider>
    );
};

export default Root;
