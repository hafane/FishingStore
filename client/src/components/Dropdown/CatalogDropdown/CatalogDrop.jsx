import React, { useRef } from 'react';
import cl from './cdrop.module.css'
import { Link } from 'react-router-dom';
import { CATALOG_ROUTE, HOME_ROUTE } from '../../../utils/pagelink';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

const CatalogDrop = ({ isDropdownVisible, setDropdownVisible }) => {


    const menuRef = useRef(null)

    const dropDown = () => {
        setDropdownVisible(!isDropdownVisible)
    }

    useOutsideClick(menuRef, () => {
        setDropdownVisible(false)
    })

    return (
        <div ref={menuRef}>
            <div onClick={dropDown} className={cl.menu}>
                <button className={cl.menuBtn}>
                    <i class="fa-solid fa-bars"></i>
                    Меню
                </button>
            </div>
            {isDropdownVisible && (
                <ul className={cl.dropdownList}>
                    <li className={cl.dropdownLi}>
                        <Link className={cl.headText} to={HOME_ROUTE} onClick={() => setDropdownVisible(false)}>Главная</Link>
                    </li>
                    <li className={cl.dropdownLi}>
                        <Link className={cl.headText} to={CATALOG_ROUTE} onClick={() => setDropdownVisible(false)}>Каталог товаров</Link>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default CatalogDrop;
