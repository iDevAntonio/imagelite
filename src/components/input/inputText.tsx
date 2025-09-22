import React from "react";

interface InputTextProps {
    style?:  string;
    placeholder?: string;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;

}

export const InputText: React.FC<InputTextProps> = ({style, ...otherProps}: InputTextProps) => {
    return(
            <input type="text" 
                    {...otherProps}
                    className={`${style} border px-5 py-2 rounded-lg text-gray-900`}/>
    )
}