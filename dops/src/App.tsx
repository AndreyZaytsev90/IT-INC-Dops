import './App.css';
import {SuperButton} from "./components/SuperButton/SuperButton";
import s from "./components/SuperButton/superButton.module.css"



function App() {


    return (
        <div>
       {/*    <SuperButton
               onClick={()=> {}}
               name={"Blue Button"}
               className={s.stylesForSuperButton}/>*/}
{/*
            <SuperButton
               onClick={()=> {}}
               name={"Red Button"}
               className={s.stylesForSuperButton2}/>*/}

            <SuperButton
                onClick={()=> {}}
                //name={"Blue Button"}
                className={s.stylesForSuperButton}>
                Blue Button
            </SuperButton>
        </div>
    );
}

export default App;