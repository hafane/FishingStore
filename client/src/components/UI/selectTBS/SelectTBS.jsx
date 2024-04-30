import React from 'react';
import cl from './selecttbs.module.css'

const SelectTBS = ({value, children, defaultValue}) => {
    return (
        <select className={cl.SelectTBS} value={value}>
            <option value="name">{defaultValue}</option>
            {children}
        </select>
    );
}

export default SelectTBS;
