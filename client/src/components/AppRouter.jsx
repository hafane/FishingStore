import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { adminRoutes, authRoutes, publicRoutes } from '../router';
import { AuthContext } from '../context/context';
import { HOME_ROUTE } from '../utils/pagelink';

const AppRouter = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            <Routes>
                {user.isAdmin && adminRoutes.map(({path, element}) => 
                    <Route key={path} path={path} Component={element} exact/>
                )}

                {user.isAuth && authRoutes.map(({path, element}) => 
                    <Route key={path} path={path} Component={element} exact />
                )}

                {publicRoutes.map(({path, element}) => 
                    <Route key={path} path={path} Component={element} exact />
                )}

                <Route path='/*' element={<Navigate to={HOME_ROUTE}/>} />
            </Routes>
        </div>
    );
}

export default AppRouter;
