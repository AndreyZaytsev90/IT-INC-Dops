import React from 'react';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Routes, Route, Navigate, NavLink} from "react-router-dom";
import {Error404} from "./pages/Error404";
//import styled from "styled-components";
import {s} from "./pages/__styleds"

export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    {/*<button><NavLink className={({isActive}) => isActive? styles.active: styles.navLink} to={'/page1'}>1</NavLink></button>*/}
                    <s.NavWrapper><NavLink to={'/page1'}>1</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink to={'/page2'}>2</NavLink></s.NavWrapper>
                    <s.NavWrapper><NavLink to={'/page3'}>3</NavLink></s.NavWrapper>


                    <s.NavWrapper><a href='/page3'>href3</a></s.NavWrapper>

                </div>
                <div className={styles.content}>
                    <Routes>
                        {/*  <Route path={'/'} element={<PageOne/>}></Route>*/}
                        <Route path={'/'} element={<Navigate to={'/page1'}/>}></Route>


                        <Route path={'/page1'} element={<PageOne/>}></Route>
                        <Route path={'/page2'} element={<PageTwo/>}></Route>
                        <Route path={'/page3'} element={<PageThree/>}></Route>

                        {/* <Route path={'/*'} element={<Error404/>}></Route>*/}
                        <Route path={'/*'} element={<Navigate to={'/page404'}/>}></Route>
                        <Route path={'/page404'} element={<Error404/>}></Route>

                    </Routes>
                </div>
            </div>
        </div>
    );
};

/*const NavWrapper = styled.button`
  margin-left: 10px;
  font-size: 20px;
  
  // & - родительский тэг
  & > a {
    text-decoration: none;
    color: #1e3789
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff
  }

  & > a:hover {
    color: steelblue;
  }
`*/

