import React, { useContext, useEffect, useState } from 'react';
import cl from './itempage.module.css'
import MyButton from '../../components/UI/Button/MyButton';
import { useParams } from 'react-router-dom'
import { createBasketItem, fetchOneItem, fetchRating } from '../../http/itemAPI';
import { AuthContext } from '../../context/context';
import Comments from '../../components/CommentModules/Comments/Comments';
import CommentAdd from '../../components/CommentModules/CommentAdd/CommentAdd';

const ItemPage = () => {
    const [Item, setItem] = useState({ info: [] })
    const { id } = useParams()
    const { item, user } = useContext(AuthContext)
    useEffect(() => {
        fetchOneItem(id).then(data => setItem(data))
        fetchRating(id).then(data => item.setItemRating(data))
    }, [])

    const addToBasket = (basketId, itemId) => {
        createBasketItem({ basketId: basketId, itemId: itemId }).then(data => {
            item.setBasketItem(data)
            alert('Вы добавили предмет в корзину')
            window.location.reload()
        })
    }

    return (
        <div className={cl.mainBg}>
            <div className={cl.headCon}>
                <h1 className={cl.headH}>{Item.name}</h1>
                <div className={cl.headInfo}>
                    <img className={cl.infoImg} src={process.env.REACT_APP_API_URL + Item.img} alt={Item.name} title={Item.name}></img>
                    <div className={cl.infoS}>
                        <h2 className={cl.infoH}>Характеристики</h2>
                        <table className={cl.table}>
                            <tbody>
                                {Item.info.map((info, index) =>
                                    <tr key={info.id} className={index % 2 === 0 ? cl['second'] : ''}>
                                        <td>{info.title}</td>
                                        <td>{info.description}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className={cl.priceInfo}>
                            <div className={cl.priceD}>
                                <p className={cl.price}>{Item.price} ₽</p>
                            </div>
                            <MyButton onClick={() => addToBasket(user.user.basketId, Item.id)}>Купить</MyButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cl.footerCon}>
                <div className={cl.review}>
                    <h1 className={cl.revH}>Отзывы</h1>
                </div>
                <div className={cl.addcomment}>
                    <CommentAdd item={item} user={user} id={id} />
                </div>
                <div className={cl}>
                    <ul className={cl.comments}>
                        {item.itemRating.map(rating =>
                            <Comments key={rating.id} rating={rating} id={id} user={user} />
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ItemPage;
