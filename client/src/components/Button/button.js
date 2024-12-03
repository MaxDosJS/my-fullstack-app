import React from "react";

const Button = ({ label, onClick, buttonStyle}) => {
    return (
        <button style={buttonStyle} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button