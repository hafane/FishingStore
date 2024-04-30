import React, { useRef } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import cl from './modal.module.css'


const Modal = ({ showModal, setShowModal, children }) => {
    const modalRef = useRef(null)

    useOutsideClick(modalRef, () => {
        setShowModal(false)
    })

    return (
        <div className={[cl['Bg'], showModal ? cl['open'] : ''].join(' ')}>
            <form ref={modalRef} className={cl.modalForm}>
                <div className={cl.xMark}>
                    <i onClick={() => setShowModal(false)} class="fa-solid fa-xmark"></i>
                </div>
                {children}
            </form>
        </div>
    );
}

export default Modal;
