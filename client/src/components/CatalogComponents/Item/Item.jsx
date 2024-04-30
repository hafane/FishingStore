import React, { useContext } from 'react';
import cl from './itemM.module.css'
import { useNavigate } from 'react-router-dom';
import { CATALOG_ROUTE, ITEM_ROUTE } from '../../../utils/pagelink';
import { AuthContext } from '../../../context/context';
import MyButton from '../../UI/Button/MyButton';
import { createBasketItem } from '../../../http/itemAPI';



const Item = ({ite, brand, type}) => {

    const {item, user} = useContext(AuthContext)

    const brandName = brand.find(b => b.id === ite.brandId)?.name
    const typeName = type.find(t => t.id === ite.typeId)?.name
    const navigate = useNavigate()

    const addToBasket = (basketId, itemId) => {
        createBasketItem({basketId: basketId, itemId: itemId}).then(data => {
            item.setBasketItem(data)
            alert('Вы добавили предмет в корзину')
            window.location.reload()
        })
    }

    return (
        <li className={cl.itemTile} >
            <div className={cl.imgCon}>
                <img onClick={() => navigate(CATALOG_ROUTE + ITEM_ROUTE + '/' + ite.id)} className={cl.itemImg} src={process.env.REACT_APP_API_URL + ite.img} alt={ite.name}/>
            </div>
            <div onClick={() => navigate(CATALOG_ROUTE + ITEM_ROUTE + '/' + ite.id)} className={cl.itemMiddle}>
                <p className={cl.itemP}>{typeName}</p>
                <h3 className={cl.itemH}>{brandName}</h3>
                <h2 className={cl.itemH}>{ite.name}</h2>
            </div>
            <div className={cl.itemFooter}>
                <h3>{ite.price} ₽</h3>
                <MyButton onClick={() => addToBasket(user.user.basketId, ite.id)}>Купить</MyButton>
            </div>
        </li>
    );
}

export default Item;
