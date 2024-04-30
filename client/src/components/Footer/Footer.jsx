import React from 'react';
import cl from './footer.module.css'

const Footer = () => {
    return (
        <div className={cl.footerBg}>
            <div className={cl.footerLogo}>
                <h1 className={cl.logoTitle}>FishinG</h1>
                <p>
                    © FishinG, 2024
                </p>
            </div>
            <div className={cl.footerInfo}>
                <div className={cl.footerSC}>
                    <h2>Мы в соц.сетях</h2>
                    <div className={cl.sc}>
                        <a href="/" target='_blank' rel='noreferrer'>
                            <span className={cl.tgLogo}></span>
                        </a>
                        <a href="https://www.youtube.com" target='_blank' rel='noreferrer'>
                            <span className={cl.ytLogo}></span>
                        </a>
                        <a href="/" target='_blank' rel='noreferrer'>
                            <span className={cl.vkLogo}></span>
                        </a>
                    </div>
                </div>
                <div className={cl.footerPay}>
                    <h2>Мы принимаем</h2>
                    <div className={cl.pay}>
                        <a href="/" target='_blank' rel='noreferrer'>
                            <span className={cl.cardImg}></span>
                        </a>
                        <a href="/" target='_blank' rel='noreferrer'>
                            <span className={cl.spbImg}></span>
                        </a>
                        <a href="/" target='_blank' rel='noreferrer'>
                            <span className={cl.qiwiImg}></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
