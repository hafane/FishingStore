import React from 'react';
import cl from './basketitem.module.css'
import { deleteBasketItem } from '../../../http/itemAPI';

const BasketItem = ({item, type, brand, user}) => {

    const brandName = brand.find(b => b.id === item.brandId)?.name
    const typeName = type.find(t => t.id === item.typeId)?.name

    const removeBasketItem = (basketId, itemId) => {
        deleteBasketItem({basketId: basketId, itemId: itemId}).then(data => alert('Вы удалили товар из корзины!'))
        window.location.reload()
    }

    return (
        <>
            <li className={cl.itemBasket}>
                <p>
                    <img className={cl.itemImg} src={process.env.REACT_APP_API_URL + item.img} alt={item.name} title={item.name} />
                </p>
                <div className={cl.infoCon}>
                    <p title='Название'>{item.name}</p>
                    <p title='Бренд'>{brandName}</p>
                    <p title='Тип'>{typeName}</p>
                    <p title='Цена'>{item.price} ₽</p>
                </div>
                <div className={cl.itemBtn}>
                    <button onClick={() => removeBasketItem(user.user.basketId, item.id)} className={cl.btn}>
                        <i class="fa-regular fa-trash-can" title='Удалить из корзины'></i>
                    </button>
                </div>
            </li>
        </>
    );
}

export default BasketItem;
