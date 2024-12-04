import React from 'react';
import {Navigate, NavLink, Outlet, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {Adidas, adidasArr} from "./components/pages/Adidas";
import {Puma, pumaArr} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import styles from "./components/Site.module.css";
import {S} from './components/pages/_styles';
import Model from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";
import {PATH} from "./routes/router";


/*const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    ID: ':id',
    PAGE4: '/prices'
} as const;*/


function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Prices</NavLink></S.NavWrapper>
                    <a href="page3">page3 HTML</a>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                  {/*  <Routes>
                        <Route path={'/'} element={<Navigate to={'/Adidas'}/>}/>

                        <Route path={PATH.PAGE1} element={<Adidas/>}/>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>
                        <Route path={PATH.PAGE4} element={<Prices/>}/>

                        <Route path={'/*'} element={<Error404/>}/>

                        <Route path={'/adidas/*'} element={<Error404/>}/>

                        <Route path={`/${PATH.PAGE1}/${PATH.ID}`} element={<Model sneakers={adidasArr}/>}/>
                        <Route path={`/${PATH.PAGE2}/${PATH.ID}`} element={<Model sneakers={pumaArr}/>}/>
                    </Routes>*/}
                </div>
            </div>
            <div className={styles.footer}>abibas 2024</div>
        </div>
    );
}

export default App;

