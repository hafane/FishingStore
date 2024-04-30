import React, { useContext } from 'react';
import cl from './pagination.module.css'
import { observer } from 'mobx-react-lite';
import { AuthContext } from '../../../context/context';

const Pagination = observer(() => {

    const {item} = useContext(AuthContext)
    
    const pageCount = Math.ceil(item.total / item.limit)
    const pages = [] 

    for(let i=0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <div className={cl.pgMain}>
            {pages.map(page => 
                <button key={page} onClick={() => item.setPage(page)} className={[cl['pgBtn'], item.page === page ? cl['active'] : ''].join(' ')}>{page}</button>
            )}
        </div>
    );
})

export default Pagination;
