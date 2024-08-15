import React, {useEffect, useState} from 'react';
import './App.css';
import {Site} from "./components/Site";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import styles from "./components/Site.module.css";
import {S} from "./components/pages/__styles";
import {useWindowSize} from "./helpers/useWindowSize";


function App() {
    const [logged, setLogged] = useState(false)
    const onClickAuthHandler = () => {
        setLogged(!logged)
        console.log(logged)
    }

    const navigate = useNavigate()

    const comeBackHandler = () => {
        navigate(-1)
    }

    const mainPageHandler = () => {
        navigate('/page/0')
    }

    //const [burger, setBurger] = useState(true)

    const windowSize = useWindowSize()
    console.log(windowSize)

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            {/* <Site/>*/}
            <button onClick={onClickAuthHandler}>Auth</button>
            <div className={styles.body}>
                {windowSize < 1000
                    ? <div></div>
                    : <div className={styles.nav}>
                        {/*<div><NavLink className={({isActive})=>isActive ?styles.active:styles.navLink} to={'/page1'}>Page1</NavLink></div>*/}
                        <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/protected'}>ProtectedPage</NavLink></S.NavWrapper>
                        <div><a href="/page1">aHrefPage1</a></div>
                    </div>
                }

                <div className={styles.content}>
                    {/*Outlet бывший Routes из Site*/}
                    <button onClick={comeBackHandler}>НАЗАД</button>
                    <button onClick={mainPageHandler}>ГЛАВНАЯ</button>
                    <Outlet/>
                </div>
            </div>

        </div>
    );
}


export default App;
