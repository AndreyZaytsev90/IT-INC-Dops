import React, {useState} from 'react';
import './App.css';
import {Site} from "./components/Site";
import {NavLink, Outlet} from "react-router-dom";
import styles from "./components/Site.module.css";
import {S} from "./components/pages/__styles";


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
           {/* <Site/>*/}
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/*<div><NavLink className={({isActive})=>isActive ?styles.active:styles.navLink} to={'/page1'}>Page1</NavLink></div>*/}
                    <S.NavWrapper><NavLink  to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink  to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink  to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink  to={'/page/protected'}>ProtectedPage</NavLink></S.NavWrapper>
                    <div><a href="/page1">aHrefPage1</a></div>
                </div>
                <div className={styles.content}>
                    {/*Outlet бывший Routes из Site*/}
                    <Outlet/>
                </div>
            </div>

        </div>
    );
}


export default App;
