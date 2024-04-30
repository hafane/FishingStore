import React from 'react';
import cl from './myselect.module.css'

const MySelect = ({option, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)} className={cl.select}>
            <option disabled value='names'>{defaultValue}</option>
            {option.map(opt => 
              <option key={opt.value} value={opt.value}>{opt.name}</option>  
            )}
        </select>
    );
}

export default MySelect;
