import React, { useContext, useRef, useState } from 'react';
import cl from './productaddmodal.module.css'
import MyInput from '../../UI/Input/MyInput';
import MyButton from '../../UI/Button/MyButton';
import { createItem } from '../../../http/itemAPI';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { AuthContext } from '../../../context/context';
import { observer } from 'mobx-react-lite';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

const ProductAddModal = observer(({ showModalProduct, setShowModalProduct }) => {

    const modalRef = useRef(null)

    useOutsideClick(modalRef, () => {
        setShowModalProduct(false)
    })

    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    const [valueName, setValueName] = useState('')

    const [valuePrice, setValuePrice] = useState(0)

    const { item } = useContext(AuthContext)


    const addInfo = (e) => {
        e.preventDefault()
        setInfo([...info, { title: '', desc: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const inputEmpty = () => {
        if (valueName.trim() === '' || valuePrice === '') {
            return true
        } else {
            return false
        }
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectedFile = (e) => {
        setFile(e.target.files[0])
    }

    const addItem = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', valueName)
        formData.append('price', valuePrice)
        formData.append('img', file)
        formData.append('brandId', item.selectedBrand.id)
        formData.append('typeId', item.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createItem(formData).then(data => setShowModalProduct(false))
    }

    return (
        <div className={[cl['Bg'], showModalProduct ? cl['open'] : ''].join(' ')}>
            <form ref={modalRef} className={cl.modalForm}>
                <div className={cl.xMark}>
                    <i onClick={() => setShowModalProduct(false)} class="fa-solid fa-xmark"></i>
                </div>
                <h3>Имя товара</h3>
                <MyInput value={valueName} onChange={(e) => setValueName(e.target.value)} placeholder='Укажите имя...' />
                <Dropdown>
                    <DropdownToggle>{item.selectedBrand.name || 'Выберите бренд'}</DropdownToggle>
                    <DropdownMenu>
                        {item.brands.map(brand =>
                            <DropdownItem onClick={() => item.setSelectedBrand(brand)} key={brand.id}>{brand.name}</DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <DropdownToggle>{item.selectedType.name || 'Выберите тип'}</DropdownToggle>
                    <DropdownMenu>
                        {item.types.map(type =>
                            <DropdownItem onClick={() => item.setSelectedType(type)} key={type.id}>{type.name}</DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
                <h3>Цена товара</h3>
                <MyInput value={valuePrice} onChange={(e) => setValuePrice(e.target.value)} type='number' placeholder='Укажите цену...' />
                <h3>Изображение товара</h3>
                <MyInput type='file' onChange={selectedFile} />
                <MyButton onClick={addInfo}>Добавить Характеристики</MyButton>
                {info.map(i =>
                    <div key={i.number} className={cl.infoInp}>
                        <input value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)} type="text" placeholder='Название хар.' />
                        <input value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} type="text" placeholder='Описание хар.' />
                        <button onClick={() => removeInfo(i.number)}>Удалить</button>
                    </div>
                )}
                <MyButton onClick={addItem} disabled={inputEmpty()}>Добавить товар</MyButton>
            </form>
        </div>
    );
})

export default ProductAddModal;
