import React from 'react';
import cl from './typelist.module.css'
import { deleteOneType } from '../../../http/itemAPI';


const TypeList = ({ type }) => {

    const removeType = (id) => {
        deleteOneType({id: id}).then(data => alert('Успешно удалено!'))
    }

    return (
        <>
            <li>
                <div className={cl.listItem}>
                    {type.name}
                    <div className={cl.listBtn}>
                        <button className={cl.btn}>
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button onClick={() => removeType(type.id)} className={cl.btn}>
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default TypeList;
