import React, { useRef, useState } from 'react';
import cl from './changeinfo.module.css'
import MyInput from '../../UI/Input/MyInput';
import MyButton from '../../UI/Button/MyButton';
import { updateItemInfo } from '../../../http/itemAPI';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

const ChangeInfoModal = ({id, ShowModalChange, setShowModalChange}) => {
    const [nameValue, setNameValue] = useState("")
    const [priceValue, setPriceValue] = useState(0)
    const [typeValue, setTypeValue] = useState(0)
    const [brandValue, setBrandValue] = useState(0)

    const modalRef = useRef(null)

    useOutsideClick(modalRef, () => {
        setShowModalChange(false)
    })

    const change = () => {
        updateItemInfo(id, nameValue, priceValue, typeValue, brandValue).then(data => () => {
            setNameValue("")
            setPriceValue(0)
            setTypeValue(0)
            setBrandValue(0)
        })
        setShowModalChange(false)
    }

    return (
        <div className={[cl['Bg'], ShowModalChange ? cl['open'] : ''].join(' ')}>
            <form ref={modalRef} className={cl.modalForm}>
                <div className={cl.xMark}>
                    <i onClick={() => setShowModalChange(false)} class="fa-solid fa-xmark"></i>
                </div>
                <MyInput onChange={e => setNameValue(e.target.value)} value={nameValue} placeholder="Новое имя..."/>
                <MyInput type="number" onChange={e => setPriceValue(e.target.value)} value={priceValue} placeholder="Новая цена..." />
                <MyInput type="number" onChange={e => setTypeValue(e.target.value)} value={typeValue} placeholder="Новый тип..." />
                <MyInput type="number" onChange={e => setBrandValue(e.target.value)} value={brandValue} placeholder="Новый бренд..." />
                <MyButton onClick={change}>Изменить</MyButton>  
            </form>
        </div>
    );
}

export default ChangeInfoModal;
