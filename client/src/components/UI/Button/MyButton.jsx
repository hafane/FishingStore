import React from 'react';
import cl from './mybutton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.btn}>
            {children}
        </button>
    );
}

export default MyButton;
