import React, { useContext, useState } from 'react';
import cl from './settingspage.module.css'
import { AuthContext } from '../../../context/context';
import { observer } from 'mobx-react-lite'
import BrandList from '../BrandList/BrandList';
import TypeList from '../TypeList/TypeList';
import TypeAddModal from '../../modals/TypeAddModal/TypeAddModal';
import BrandAddModal from '../../modals/BrandAddModal/BrandAddModal';

const SettingsPage = observer(() => {

    const { item } = useContext(AuthContext)

    const [showModalType, setShowModalType] = useState(false)
    const [showModalBrand, setShowModalBrand] = useState(false)

    return (
        <div className={cl.main}>
            <div className={cl.category}>
                <div className={cl.catHead}>
                    <h3>Тип</h3>
                    <button onClick={() => setShowModalType(true)} title='Добавить' className={cl.addBtn}>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <ul className={cl.List}>
                    {item.types.map(type =>
                        <TypeList key={type.id} type={type} />
                    )}
                </ul>
                {showModalType && 
                    <TypeAddModal showModalType={showModalType} setShowModalType={setShowModalType} />
                }
            </div>
            <div className={cl.brands}>
                <div className={cl.brandHead}>
                    <h3>Бренд</h3>
                    <button onClick={() => setShowModalBrand(true)} title='Добавить' className={cl.addBtn}>
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
                <ul className={cl.List}>
                    {item.brands.map(brand =>
                        <BrandList key={brand.id} brand={brand} /> 
                    )}
                </ul>
                {showModalBrand && 
                    <BrandAddModal showModalBrand={showModalBrand} setShowModalBrand={setShowModalBrand} />
                }
            </div>
        </div>
    );
})

export default SettingsPage;
