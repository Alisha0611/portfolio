import React from "react";
import './Buttons.css'

const STYLES = [
    'btn-primary',
    'btn-outline'
]

const SIZE = [
    'btn-medium',
    'btn-large'
]
    
export const Buttons = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]
    return (

        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}


