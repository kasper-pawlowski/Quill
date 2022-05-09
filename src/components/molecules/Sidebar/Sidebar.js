import React, { useState, useEffect } from 'react';
import { Wrapper, ProfileWrapper, LogoLink, ArrowIcon, ProfileMenu, ProfileMenuItem, LogoutIcon, DefaultAvatar } from './Sidebar.styles.js';
import { useAuth } from 'context/AuthContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, where, Timestamp, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase';

const Sidebar = () => {
    const { currentUser, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [collections, setCollections] = useState([]);
    const collectionsRef = collection(db, 'collections');

    // const getCollections = () => {
    //     const q = query(collection(db, 'collections'), orderBy('created', 'desc'));
    //     onSnapshot(q, (querySnapshot) => {
    //         setCollections(
    //             querySnapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }))
    //         );
    //     });
    // };

    // useEffect(() => {
    //     getCollections();
    // }, []);

    return (
        <Wrapper>
            <Link to="/">
                <LogoLink />
            </Link>

            <AnimatePresence>
                <ProfileWrapper key="profile-wrapper" as={motion.div} layout transition={{ duration: 0.15 }}>
                    {currentUser.photoURL ? <img src={currentUser.photoURL} alt="" /> : <DefaultAvatar />}
                    <p>{currentUser.displayName}</p>
                    <ArrowIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                </ProfileWrapper>

                {isOpen && (
                    <ProfileMenu
                        key="profile-menu"
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
