import React, { useState } from 'react'
import { Search } from './Search'
import { Button } from './Button'
import { NavigationBar } from './NavigationBar'
import Logo from '../assets/logo'
import UserSVG from '../assets/userSVG'
import CartSVG from '../assets/cartSVG'
import SearchSVG from '../assets/searchSVG'
import HamburgerSVG from '../assets/hamburgerSVG'
import { useResize } from '../hooks/useResize'

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
}

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    let size = useResize();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header style={styles.header}>
                {size === 'normal' ?
                    <>
                        <div style={styles.div}>
                            <Logo style={styles.logo} />
                            <Button style={styles.text} >
                                <p>Plants</p>
                            </Button>
                            <Button style={styles.text} >
                                <p>Seeds</p>
                            </Button>
                            <Button style={styles.text}>
                                <p>About us</p>
                            </Button>
                        </div>
                        <div style={styles.div}>
                            <Search />
                            <Button >
                                <UserSVG />
                            </Button>
                            <Button >
                                <CartSVG />
                            </Button>
                        </div>
                    </>
                    : 
                    <>
                    <div style={styles.div}>
                            <Button onClick={toggleMenu}>
                                <HamburgerSVG />
                            </Button>
                            <Logo style={styles.logo} />
                        </div>
                        <div style={styles.div}>
                            <Button onClick={toggleMenu}>
                                <SearchSVG />
                            </Button>
                            <Button >
                                <UserSVG />
                            </Button> 
                            <Button >
                                <CartSVG />
                            </Button> 
                        </div>
                    </>
                }
            </header>
            {isMenuOpen && size === 'small' && (
                 <NavigationBar toggleMenu={toggleMenu} />
            )}
        </>
    )
}
