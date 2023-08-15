import React, { useState } from 'react';
import { Search } from './Search'
import { Button } from './Button'
import Logo from '../assets/logo'
import UserSVG from '../assets/userSVG'
import CartSVG from '../assets/cartSVG'
import SearchSVG from '../assets/searchSVG'
import HamburgerSVG from '../assets/hamburgerSVG'
import { useResize } from '../hooks/useResize';

const styles = {
    header: {
        backgroundColor: 'white',
        width: '100%',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBlockEnd: 'solid',
    },
    button: {
        width: '100px'
    },
    div: {
        display: 'flex',
        alignItems: 'center',
    },
    text: {
        fontSize: '18px',
        padding: '10px',
    },
    logo: {
        paddingRight: '20px' 
    }, 
    menu: {
        backgroundColor: 'white',
        width: '100px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
    } 
}

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <header style={styles.header}>
                {useResize() === 'normal' ?
                    <>
                        <div style={styles.div}>
                            <Logo style={styles.logo} />
                            <Button data={<p>Plants</p>} style={styles.text} />
                            <Button data={<p>Seeds</p>} style={styles.text} />
                            <Button data={<p>About us</p>} style={styles.text} />
                        </div>
                        <div style={styles.div}>
                            <Search />
                            <Button data={<UserSVG />} />
                            <Button data={<CartSVG />} />
                        </div>
                    </>
                    : 
                    <>
                    <div style={styles.div}>
                            <Button data={<HamburgerSVG />} onClick={toggleMenu}/>
                            <Logo style={styles.logo} />
                        </div>
                        <div style={styles.div}>
                            <Button data={<SearchSVG />} />
                            <Button data={<UserSVG />} />
                            <Button data={<CartSVG />} />
                        </div>
                    </>
                }
            </header>
            {isMenuOpen && (
                <div className="menu">
                    <Button data={<p>Plants</p>} style={{ ...styles.text, ...styles.button }} />
                    <Button data={<p>Seeds</p>} style={{ ...styles.text, ...styles.button }} />
                    <Button data={<p>About us</p>} style={{ ...styles.text, ...styles.button }} />
                </div>
            )}
        </>
    )
}