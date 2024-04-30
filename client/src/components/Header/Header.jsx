import React, { useContext, useState } from 'react';
import cl from './header.module.css'
import { AuthContext } from '../../context/context';
import { ADMIN_ROUTE, BASKET_ROUTE, CATALOG_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../../utils/pagelink';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite'
import SearchedDrop from '../Dropdown/SearchedDropdown/SearchedDrop';

const Header = observer(() => {
    const { item, user } = useContext(AuthContext)
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState('')

    const searchedItems = item.items.filter(item => item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()))

    const logOut = () => {
        user.setUser({})
        localStorage.removeItem('token')
        user.setIsAdmin(false)
        user.setIsAuth(false)
        window.location.reload()
    }

    return (
        <header className={cl.headerBg}>
            <div className={cl.headerMain}>
                <div className={cl.headerWrap}>
                    <Link className={cl.hA} to={HOME_ROUTE}>
                        <div className={cl.logoCon}>
                            <h1 className={cl.logoTitle}>FishinG</h1>
                        </div>
                    </Link>
                    <div className={cl.menuWrap}>
                        <div className={cl.srch}>
                            <div className={cl.srchInpCon}>
                                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={cl.srchInp} type="text" placeholder='Поиск...' />
                            </div>
                            {searchQuery &&
                                <SearchedDrop searchedItems={searchedItems} navigate={navigate} />
                            }
                        </div>
                        <div className={cl.btns}>
                            {user.isAuth ?
                                <Link onClick={() => logOut()} className={cl.btnA} title='Выйти'>
                                    <div className={cl.icoText}>
                                        <p className={cl.btnText}>
                                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                        </p>
                                    </div>
                                </Link>
                                :
                                <Link className={cl.btnA} to={LOGIN_ROUTE} title='Войти'>
                                    <div className={cl.icoText}>
                                        <p className={cl.btnText}>
                                            <i class="fa-solid fa-arrow-right-to-bracket"></i>
                                        </p>
                                    </div>
                                </Link>
                            }
                            {user.isAuth &&
                                <Link className={cl.btnA} to={BASKET_ROUTE} title='Корзина'>
                                    <div className={cl.icoText}>
                                        <p className={cl.btnText}>
                                            <i class="fa-solid fa-cart-shopping"></i>
                                        </p>
                                    </div>
                                </Link>
                            }
                            {user.isAdmin &&
                                <Link className={cl.btnA} to={ADMIN_ROUTE} title='Админ'>
                                    <div className={cl.icoText}>
                                        <p className={cl.btnText}>
                                            <i class="fa-solid fa-user-tie"></i>
                                        </p>
                                    </div>
                                </Link>
                            }
                        </div>
                    </div>
                </div>
                <div className={cl.headerF}>
                    <div className={cl.menuLink}>
                        <ul className={cl.List}>
                            <li className={cl.Li}>
                                <Link className={cl.headText} to={HOME_ROUTE}>
                                    <i class="fa-solid fa-house"></i>
                                    Главная
                                </Link>
                            </li>
                            <li className={cl.Li}>
                                <Link className={cl.headText} to={CATALOG_ROUTE}>
                                    <i class="fa-solid fa-bars"></i>
                                    Каталог товаров
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
})

export default Header;
