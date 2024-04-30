import React, { useContext } from 'react';
import { AuthContext } from '../../../context/context';
import cl from './typebar.module.css'
import { observer } from 'mobx-react-lite'

const Typebar = observer(() => {
    const { item } = useContext(AuthContext)

    // const set = (index) => {
    //     const updateIsShowed = [...isShowed]
    //     updateIsShowed[index] = !updateIsShowed[index]
    //     setIsShowed(updateIsShowed)
    // }

    return (
        <div className={cl.bar}>
            <ul className={cl.ulBar}>
                <li className={cl.head}>
                    <p onClick={() => item.setSelectedType(0)} className={cl.pBar}>
                        Тип:
                    </p>
                </li>
                {item.types.map(type =>
                    <li className={cl.head} key={type.id}>
                        <p onClick={() => item.setSelectedType(type)} className={[cl['pBar'], type.id === item.selectedType.id ? cl['active'] : ''].join(' ')}>
                            {type.name}
                        </p>
                    </li>
                )}
            </ul>
        </div>
    );
})

export default Typebar;
