import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import cl from './brandbar.module.css'

const BrandBar = observer(() => {
    const { item } = useContext(AuthContext)
    return (
        <div className={cl.brandBar}>
            <ul className={cl.ulBrand}>
                <li className={cl.liBrand}>
                    <p onClick={() => item.setSelectedBrand(0)} className={cl.pBrand}>
                        Бренд:
                    </p>
                </li>
                {item.brands.map(brand =>
                    <li key={brand.id} className={cl.liBrand}>
                        <p onClick={() => item.setSelectedBrand(brand)} className={[cl['pBrand'], brand.id === item.selectedBrand.id ? cl['active'] : ''].join(' ')}>
                            {brand.name}
                        </p>
                    </li>
                )}
            </ul>
        </div>
    );
})

export default BrandBar;
