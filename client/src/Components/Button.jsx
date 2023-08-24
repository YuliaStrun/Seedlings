import React from 'react'

const styles = {
      button: {
        top: '14px',
        right: '5px',
        backgroundColor: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    }
}

export const Button = (props) => {
    return (
        <button style={{...styles.button, ...props.style}} onClick={props.onClick}>
            {props.children}
        </button>
    )
}