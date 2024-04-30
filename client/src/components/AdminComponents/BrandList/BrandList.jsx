import React from 'react';
import cl from './brandlist.module.css'
import { deleteOneBrand } from '../../../http/itemAPI';


const BrandList = ({brand}) => {

    const removeBrand = (id) => {
        deleteOneBrand({id: id}).then(data => alert('Успешно удалено!'))
    }

    return (
        <>
            <li>
                <div className={cl.listItem}>
                    {brand.name}
                    <div className={cl.listBtn}>
                        <button className={cl.btn}>
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button onClick={() => removeBrand(brand.id)} className={cl.btn}>
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default BrandList;
