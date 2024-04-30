import React, { useState } from 'react';
import { createRating } from '../../../http/itemAPI';
import MySelect from '../../UI/selectSort/MySelect';
import MyInput from '../../UI/Input/MyInput';
import MyButton from '../../UI/Button/MyButton';

const CommentAdd = ({ item, user, id }) => {

    const [Rate, setRate] = useState(0)
    const [titleValue, setTitle] = useState('')
    const [descValue, setDesc] = useState('')

    const rateSelect = (rate) => {
        setRate(rate)
    }

    const addComment = (rate, title, description, itemId, userId) => {
        createRating({ rate: rate, title: title, description: description, itemId: itemId, userId: userId }).then(data => {
            item.setItemRating(data)
            alert('Спасибо за отзыв')
            window.location.reload()
        })
    }
    
    const isEmpty = () => {
        if(titleValue.trim() && descValue.trim() && Rate) {
            return false
        } else return true
    }

    return (
        <>
            <MySelect value={Rate} onChange={rateSelect} defaultValue='Выберите оценку' option={[
                { value: 5, name: '5' },
                { value: 4, name: '4' },
                { value: 3, name: '3' },
                { value: 2, name: '2' },
                { value: 1, name: '1' },
            ]} />
            <MyInput value={titleValue} onChange={(e) => setTitle(e.target.value)} maxLength='255' placeholder='Заголовок' />
            <MyInput value={descValue} onChange={(e) => setDesc(e.target.value)} maxLength='255' placeholder='Комментарий' />
            <MyButton disabled={isEmpty()} onClick={() => addComment(Rate, titleValue, descValue, id, user.user.id)}>Отправить</MyButton>
        </>
    );
}

export default CommentAdd;
