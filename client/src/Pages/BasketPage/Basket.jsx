import React, { useContext, useEffect, useState } from 'react';
import cl from './basket.module.css'
import { AuthContext } from '../../context/context';
import { fetchBasket, fetchBrands, fetchOneItem, fetchTypes } from '../../http/itemAPI';
import { observer } from 'mobx-react-lite';
import MyButton from '../../components/UI/Button/MyButton';
import BasketItem from '../../components/BasketComponents/BasketItem/BasketItem';

const Basket = observer(() => {

    const { item, user } = useContext(AuthContext)

    const [totalPrice, setTotalPrice] = useState(0)

    // const [basketIsEmpty, setBasketIs] = useState(true)

    const type = item.types
    const brand = item.brands

    useEffect(() => {
        fetchTypes().then(data => {
            item.setTypes(data)
        })
        fetchBrands().then(data => {
            item.setBrands(data)
        })
        const fetchBasketItems = async (basketId) => {
            try {
                fetchBasket(basketId).then(data => { item.setBasket(data) })
                const basketItems = item.basket.map(item => item.itemId)
                const itemsPromises = basketItems.map(itemId => fetchOneItem(itemId))
                const all = await Promise.all(itemsPromises)
                const total = all.reduce((acc, item) => acc + (item.price || 0), 0)
                setTotalPrice(total)
                item.setBasketItem(all)
            } catch (error) {
                console.log('Ошибка в получении содержимого корзины', error)
            }
        }
        fetchBasketItems(user.user.basketId)
    }, [])

    return (
        <div className={cl.Bbg}>
            <div className={cl.Basket}>
                <h1 className={cl.basketHead}>Корзина: {user.user.email}</h1>
                <ul className={cl.ulBasket}>
                    {item.basketItem.map(item =>
                        <BasketItem key={item.id} item={item} type={type} brand={brand} user={user} />
                    )}
                </ul>
                {/* {basketIsEmpty &&
                    <div>
                        <img src='https://rybomania.ru/local/templates/adaptive/components/bitrix/sale.basket.basket/bootstrap5/images/empty_cart.svg' className={cl.cartImage} />
                        <div className={cl.cartEmpty}>Ваша корзина пуста.</div>
                    </div>
                } */}

                <div className={cl.basketFooter}>
                    <div>
                        <p>Итоговая цена: <strong>{totalPrice}₽</strong> </p>
                    </div>
                    <div className=''>
                        <MyButton>Перейти к оплате...</MyButton>
                    </div>
                </div>
            </div>
        </div >
    );
})

export default Basket;
