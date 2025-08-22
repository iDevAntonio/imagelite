import React from 'react';
interface TemplateProps {
  children: React.ReactNode;
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
    return (
        <>
            <Header />
            <div className='container mx-auto mt-8 px-4 '>
                {props.children}

            </div>
            
            <Footer />
        </>
    );
};


const Header: React.FC = () => {
    return (
        <header className='bg-gray-800 text-white py-4'>
            <div className='container mx-auto flex justify-between items-center px-4'>
                <h1 className='text-3x1 font-bold'>imagelite</h1>
            </div>
        </header>
    );
}

const Footer: React.FC = () => {
    return (
        <footer className='bg-gray-800 text-white py-4 mt-8'>
            <div className='container mx-auto text-center'>
                <p>&copy; {new Date().getFullYear()} imagelite. All rights reserved.</p>
            </div>
        </footer>
    );
}