import React, { useContext, useState } from 'react';
import MyInput from '../../components/UI/Input/MyInput';
import cl from './login.module.css'
import MyButton from '../../components/UI/Button/MyButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/pagelink';
import { login, registration } from '../../http/userAPI';
import { observer } from 'mobx-react-lite'
import { AuthContext } from '../../context/context';

const Auth = observer(() => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [isEmail, setIsEmail] = useState('')
    const [isPassword, setIsPassword] = useState('')

    const clickAuth = async (e) => {
        e.preventDefault()
        try {
            let data;
            if (isLogin) {
                data = await login(isEmail, isPassword)
            } else {
                data = await registration(isEmail, isPassword)
            }
            user.setUser(data)
            user.setIsAuth(true)
            if(data.role === 'ADMIN') {
                user.setIsAdmin(true)
            }
            navigate(HOME_ROUTE)
            window.location.reload()
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className={cl.auth}>
            <div className={cl.authM}>
                {isLogin ?
                    <h1>Страница Авторизации</h1>
                    :
                    <h1>Страница Регистрации</h1>
                }
                <form>
                    <MyInput value={isEmail} onChange={e => setIsEmail(e.target.value)} type='text' placeholder='Введите логин...' />
                    <MyInput value={isPassword} onChange={e => setIsPassword(e.target.value)} type='password' placeholder='Введите пароль...' />
                    <div className={cl.btn}>
                        <MyButton onClick={clickAuth}>
                            {isLogin ?
                                'Вход'
                                :
                                'Регистрация'
                            }
                        </MyButton>
                        {isLogin ?
                            <Link className={cl.goTo} to={REGISTRATION_ROUTE}>Нет аккаунта?</Link>
                            :
                            <Link className={cl.goTo} to={LOGIN_ROUTE}>Есть аккаунт?</Link>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
})

export default Auth;
