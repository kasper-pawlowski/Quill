import React, { useState } from 'react';
import { Wrapper, ProfileWrapper, LogoLink, ArrowIcon, ProfileMenu, ProfileMenuItem, LogoutIcon } from './Sidebar.styles.js';
import { useAuth } from 'context/AuthContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = () => {
    const { currentUser, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    console.log(currentUser);

    return (
        <Wrapper>
            <Link to="/">
                <LogoLink />
            </Link>
            <AnimatePresence>
                <ProfileWrapper as={motion.div} layout transition={{ duration: 0.15 }}>
                    <img src={currentUser.photoURL} alt="" />
                    <p>{currentUser.displayName}</p>
                    <ArrowIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                </ProfileWrapper>
                {isOpen && (
                    <ProfileMenu
                        as={motion.div}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}>
                        <ProfileMenuItem onClick={() => logout()}>
                            <LogoutIcon />
                            Logout
                        </ProfileMenuItem>
                    </ProfileMenu>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default Sidebar;
