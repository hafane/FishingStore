import React from 'react';
import cl from './sdrop.module.css'
import { CATALOG_ROUTE, ITEM_ROUTE } from '../../../utils/pagelink';

const SearchedDrop = ({searchedItems, navigate}) => {
    return (
        <div className={cl.srchDrop}>
            <ul className={cl.srchUl}>
                {searchedItems.map(srched =>
                    <li key={srched.id} onClick={() => navigate(CATALOG_ROUTE + ITEM_ROUTE + '/' + srched.id)} className={cl.srchLi}>
                        <div className={cl.imgCon}>
                            <img className={cl.itemImg} src={process.env.REACT_APP_API_URL + srched.img} alt={srched.name} />
                        </div>
                        <h2>{srched.name}</h2>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default SearchedDrop;
