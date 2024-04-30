import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import cl from './itemlist.module.css'
import { AuthContext } from '../../../context/context';
import Item from '../Item/Item';

const ItemList = observer(({brand, type}) => {

    const {item, user} = useContext(AuthContext)


    return (
        <div className={cl.BgWrap}>
            <div className={cl.listMain}>
                <ul className={cl.list}>
                    {item.items.map(ite =>
                        <Item key={ite.id} user={user} ite={ite} brand={brand} type={type} />
                    )}
                </ul>
            </div>
        </div>
    );
})

export default ItemList;
