'use client';

import React from "react";

interface PrimeiroComponentProps {
    mensagemm?: string;
    mensagemDoBotao?: string;
}


export const PrimeiroComponent: React.FC<PrimeiroComponentProps> = (props: PrimeiroComponentProps) => {

    function handleClick() {
        console.log(props.mensagemDoBotao);
    }

    return (
        <div>
                
            {props.mensagemm && <h1>{props.mensagemm}</h1>}
            <button onClick={handleClick}>Clique aqui</button>  
        </div>
    );
}

export const ArrowFunction = () => {
    return (
        <h2>Arrow Function</h2>
    );
}