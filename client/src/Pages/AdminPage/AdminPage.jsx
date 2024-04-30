import React, { useContext, useEffect, useState } from 'react';
import cl from './adminpage.module.css'
import SettingsPage from '../../components/AdminComponents/SettingsPage/SettingsPage';
import ProductPage from '../../components/AdminComponents/ProductPage/ProductPage';
import { fetchBrands, fetchItems, fetchTypes } from '../../http/itemAPI';
import { AuthContext } from '../../context/context';


const AdminPage = () => {

    const {item} = useContext(AuthContext)

    const [isShowedSet, setIsShowedSet] = useState(false)
    const [isShowedProd, setIsShowedProd] = useState(false)
    const [isShowedOrder, setIsShowedOrder] = useState(false)
    
    useEffect(() => {
        fetchBrands().then(data => {
            item.setBrands(data)
        })
        fetchTypes().then(data => {
            item.setTypes(data)
        })
        fetchItems().then(data => {
            item.setItem(data.rows)
        })
    }, [])

    return (
        <div className={cl.adminBg}>
            <div className={cl.adminNav}>
                <nav className={cl.nav}>
                    <ul className={cl.navList}>
                        <li>
                            <button onClick={() => setIsShowedOrder(!isShowedOrder)} className={cl.linkBtn}>
                                <i class="fa-solid fa-bag-shopping"></i>
                                <span className={cl.textBtn}>Заказы</span>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => {
                                setIsShowedProd(!isShowedProd)
                                setIsShowedOrder(false)
                                setIsShowedSet(false)}}
                                className={cl.linkBtn}>
                                <i class="fa-regular fa-clipboard"></i>
                                <span className={cl.textBtn}>Товары</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setIsShowedSet(!isShowedSet)
                                    setIsShowedProd(false)
                                    setIsShowedOrder(false)}}
                                className={cl.linkBtn}>
                                <i class="fa-solid fa-gears"></i>
                                <span className={cl.textBtn}>Настройки</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
            {isShowedSet && <SettingsPage />}
            {isShowedProd && <ProductPage />}
        </div>
    );
}

export default AdminPage;
