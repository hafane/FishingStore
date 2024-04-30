import React, { useCallback, useContext, useEffect, useState } from 'react';
import cl from './catalog.module.css'
import Typebar from '../../components/CatalogComponents/Typebar/Typebar';
import BrandBar from '../../components/CatalogComponents/BrandBar/BrandBar';
import ItemList from '../../components/CatalogComponents/ItemList/ItemList';
import { observer } from 'mobx-react-lite'
import { AuthContext } from '../../context/context';
import { fetchBrands, fetchItems, fetchTypes } from '../../http/itemAPI';
import MySelect from '../../components/UI/selectSort/MySelect';
import Pagination from '../../components/CatalogComponents/PagesPagination/Pagination';

const Catalog = observer(() => {

    const { item } = useContext(AuthContext)

    const [selectedSort, setSelectedSort] = useState('')

    const brand = item.brands
    const type = item.types

    useEffect(() => {
        fetchTypes().then(data => {
            item.setTypes(data)
        })
        fetchBrands().then(data => {
            item.setBrands(data)
        })
        fetchItems(null, null, 1, 8).then(data => {
            item.setItem(data.rows)
            item.setTotalCount(data.count)
        })
    }, [])

    const sortItems = useCallback((sort) => {
        setSelectedSort(sort)
        const sorted = [...item.items].sort((a, b) => (a[sort] - b[sort] || a[sort].localeCompare(b[sort])))
        item.setItem(sorted)
    }, [item.items])


    useEffect(() => {
        fetchItems(item.selectedType.id, item.selectedBrand.id, item.page, 8).then(data => {
            item.setItem(data.rows)
            item.setTotalCount(data.count)
        })
    }, [item.page, item.selectedType, item.selectedBrand])

    return (
        <div className={cl.catalogBg}>
            <div className={cl.catalogMain}>
                <div className={cl.catalogHead}>
                    <Typebar />
                    <BrandBar />
                    <div className={cl.select}>
                        <MySelect value={selectedSort} onChange={sortItems} defaultValue='Сортировка' option={[
                            { value: 'name', name: 'По названию' },
                            { value: 'price', name: 'По цене' }
                        ]} />
                    </div>
                </div>
                <ItemList brand={brand} type={type} />
                <Pagination/>
            </div>
        </div>
    );
})

export default Catalog;
