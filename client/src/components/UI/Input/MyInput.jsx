import React from 'react';
import cl from './myinput.module.css'

const MyInput = (props) => {
    return (
        <input className={cl.myInput} {...props}/>
    );
}

export default MyInput;
