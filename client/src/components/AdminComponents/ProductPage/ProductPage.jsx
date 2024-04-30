import React, { useContext, useState } from 'react';
import cl from './productpage.module.css'
import { AuthContext } from '../../../context/context';
import { observer } from 'mobx-react-lite';
import ProductList from '../ProductList/ProductList';
import ProductAddModal from '../../modals/ProductAddModal/ProductAddModal';

const ProductPage = observer(() => {


    const {item} = useContext(AuthContext)

    const [showModalProduct, setShowModalProduct] = useState(false)

    const brand = item.brands
    const type = item.types

    return (
        <div className={cl.main}>
            <div className={cl.product}>
                <div className={cl.prodHead}>
                    <h3>Товар</h3>
                    <button onClick={() => setShowModalProduct(true)} title='Добавить' className={cl.addBtn}>
                        <i class="fa-solid fa-plus"></i>
                        Добавить товар
                    </button>
                    {showModalProduct && 
                        <ProductAddModal showModalProduct={showModalProduct} setShowModalProduct={setShowModalProduct} />
                    }
                </div>
            </div>
            <div className={cl.prodList}>
                <table className={cl.tableProduct}>
                    <thead>
                        <tr>
                            <th>Изображение</th>
                            <th>Название</th>
                            <th>Тип</th>
                            <th>Бренд</th>
                            <th>Цена ₽</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.items.map(item =>
                            <ProductList key={item.id} item={item} type={type} brand={brand} />
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
})

export default ProductPage;
