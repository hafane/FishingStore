import React, { useRef, useState } from 'react';
import cl from './brandaddmodal.module.css'
import MyInput from '../../UI/Input/MyInput';
import { createBrand } from '../../../http/itemAPI';
import MyButton from '../../UI/Button/MyButton';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

const BrandAddModal = ({showModalBrand, setShowModalBrand}) => {

    const [value, setValue] = useState('')

    const modalRef = useRef(null)

    useOutsideClick(modalRef, () => {
        setShowModalBrand(false)
    })

    const addBrand = () => {
        createBrand({name: value}).then(data => setValue(''))
        setShowModalBrand(false)
    }

    const inputEmpty = () => {
        if (value.trim() === '') {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={[cl['Bg'], showModalBrand ? cl['open'] : ''].join(' ')}>
            <form ref={modalRef} className={cl.modalForm}>
                <div className={cl.xMark}>
                    <i onClick={() => setShowModalBrand(false)} class="fa-solid fa-xmark"></i>
                </div>
                <MyInput value={value} onChange={(e) => setValue(e.target.value)} placeholder='Введите имя бренда...' />
                <MyButton disabled={inputEmpty()} onClick={addBrand}>Добавить</MyButton>
            </form>
        </div>
    );
}

export default BrandAddModal;
