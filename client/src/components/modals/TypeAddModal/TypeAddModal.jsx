import React, { useRef, useState } from 'react';
import cl from './typeaddmodal.module.css'
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import MyInput from '../../UI/Input/MyInput';
import MyButton from '../../UI/Button/MyButton';
import { createType } from '../../../http/itemAPI';

const TypeAddModal = ({ showModalType, setShowModalType }) => {

    const [value, setValue] = useState('')

    const modalRef = useRef(null)

    useOutsideClick(modalRef, () => {
        setShowModalType(false)
    })

    const addType = () => {
        createType({name: value}).then(data => setValue(''))
        setShowModalType(false)
    }

    const inputEmpty = () => {
        if (value.trim() === '') {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={[cl['Bg'], showModalType ? cl['open'] : ''].join(' ')}>
            <form ref={modalRef} className={cl.modalForm}>
                <div className={cl.xMark}>
                    <i onClick={() => setShowModalType(false)} class="fa-solid fa-xmark"></i>
                </div>
                <MyInput onChange={e => setValue(e.target.value)} value={value} placeholder='Введите имя типа...' />
                <MyButton disabled={inputEmpty()} onClick={addType} >Добавить</MyButton>
            </form>
        </div>
    );
}

export default TypeAddModal;
