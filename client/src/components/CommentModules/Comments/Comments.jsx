import React from 'react';
import cl from './comments.module.css'
import { deleteRating } from '../../../http/itemAPI';

const Comments = ({ rating, id, user }) => {

    const removeReview = (itemId, userId) => {
        deleteRating({itemId: itemId, userId: userId}).then(data => alert('Вы удалили отзыв.'))
    }

    return (
        <>
            <li className={cl.comment}>
                <div className={cl.comhead}>
                    <h1 className={cl.user}>Отзыв от: {rating.userId}</h1>
                    {rating.userId === user.user.id &&
                        <div className={cl.listBtn}>
                            <button onClick={() => removeReview(id, user.user.id)} className={cl.btn} title='Удалить отзыв?'>
                                <i class="fa-regular fa-trash-can"></i>
                            </button>
                        </div>
                    }
                </div>
                <div className={cl.comrate}>
                    <div className={cl.rate}>
                        <p>Оценка: <strong>{rating.rate}</strong></p>
                    </div>
                </div>
                <div className={cl.title}>
                    <h3>Заголовок</h3>
                    <p>{rating.title}</p>
                </div>
                <div className={cl.desc}>
                    <h3>Комментарий</h3>
                    <p>{rating.description}</p>
                </div>
                <hr />
            </li>
        </>
    );
}

export default Comments;
