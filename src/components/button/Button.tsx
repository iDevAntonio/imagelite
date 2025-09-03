import React from "react";

interface ButtonProps {
    style?:  string;
    label?: string;
    onClick?: (event: any) => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
    
}

export const Button: React.FC<ButtonProps> = ({onClick,style,label, type}: ButtonProps) => {
    return(
        <>
            <button onClick={onClick} 
            type={type}
            className={`${style} text-white px-4 py-2 rounded-lg hover: transition-colors duration-300`}>
                {label}
            </button>
        </>
    )
};