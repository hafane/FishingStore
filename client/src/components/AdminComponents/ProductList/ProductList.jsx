import React from 'react';
import cl from './productlist.module.css'
import { deleteOneItem } from '../../../http/itemAPI';
import { observer } from 'mobx-react-lite';

const ProductList = observer(({ item, brand, type }) => {

    const typeName = type.find(t => t.id === item.typeId)?.name
    const brandName = brand.find(b => b.id === item.brandId)?.name

    const removeItem = (id, img) => {
        deleteOneItem({id: id, img: img}).then(data => alert('Успешно удалено!'))
    }
    

    return (
        <>
            <tr>
                <td>
                    <img className={cl.listImg} src={process.env.REACT_APP_API_URL + item.img} alt={item.name} />
                </td>
                <td>
                    <p>{item.name}</p>
                </td>
                <td>
                    <p>{typeName}</p>
                </td>
                <td>
                    <p>{brandName}</p>
                </td>
                <td> 
                    <strong>{item.price} ₽</strong>
                </td>
                <td>
                    <div className={cl.listBtn}>
                        <button className={cl.btn}>
                            <i class="fa-solid fa-pencil"></i>
                        </button>
                        <button onClick={() => removeItem(item.id, item.img)} className={cl.btn}>
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
})

export default ProductList;
