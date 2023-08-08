import React from 'react';
import { Button } from './Button'
import HamburgerSVG from '../assets/hamburgerSVG'
import CloseSVG from '../assets/closeSVG'
import { Search } from './Search';

const styles = {
    navbarContainer: {
        position: 'fixed',
        top: 0,
        width: '75%', 
        height: '100vh', 
        backgroundColor: 'white', 
        zIndex: 1000, 
        transition: 'left 0.3s ease', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flexStart',
        borderRight: 'solid',
    },
    button: {
        width: '100%',
        
    },
    closeButton: {
        backgroundColor: '#bbe9db',
    },
    text: {
        fontSize: '18px',
        padding: '10px',
    },
    header: {
        backgroundColor: '#bbe9db',
        width: '100%',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBlockEnd: 'solid',
    },
    svg: {
        margin: '10px',
        display: 'flex',
        alignItems: 'center',
    },
    searchBlock: {
        marginTop: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
    }
}

export const NavigationBar = (props) => {
    const { toggleMenu } = props;

    return (
        <div style={styles.navbarContainer}>
            <div style={styles.header}>
                <div style={styles.svg}>
                    <HamburgerSVG />
                    <p>Menu</p>
                </div>
                <Button style={styles.closeButton} onClick={toggleMenu}>
                    <CloseSVG />
                </Button>
            </div>
            <div style={styles.searchBlock}>
                <Search/>
            </div>
            <Button  style={{ ...styles.text, ...styles.button }}>
                <p>Plants</p>
            </Button>
            <Button  style={{ ...styles.text, ...styles.button }}>
                <p>Seeds</p>
            </Button>
            <Button  style={{ ...styles.text, ...styles.button }}>
                <p>About us</p>
            </Button>
        </div>
    )
}