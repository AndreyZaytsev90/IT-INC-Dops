import './App.css';
import {SuperButton} from "./components/SuperButton/SuperButton";
import s from "./components/SuperButton/superButton.module.css"
import {SuperTodolist} from "./components/SuperTodolist/SuperTodolist";

export type TasksProps = {id: number, title: string, isDone: boolean}

function App() {

    let tasks: TasksProps[] = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
        {id: 4, title: "REACT", isDone: false},
    ]


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

            {/* <SuperButton
                onClick={()=> {}}
                //name={"Blue Button"}
                className={s.stylesForSuperButton}>
                Blue Button
            </SuperButton>*/}

            <SuperButton onClick={() => {
            }} color={'blue'}>Blue Button</SuperButton>
            <SuperButton onClick={() => {
            }} color={'red'} disabled>Red Button</SuperButton>
            <SuperButton onClick={() => {
            }}>Default Button</SuperButton>

            <SuperTodolist tasks={tasks}>
                <SuperButton onClick={() => {}} color={'blue'}>Blue Button</SuperButton>
                <SuperButton onClick={() => {}} color={'red'} disabled>Red Button</SuperButton>
                <SuperButton onClick={() => {}}>Default Button</SuperButton>
                <p>Привет!</p>
                <p>Привет!</p>
                <p>Привет!</p>
                <input type="text"/>
            </SuperTodolist>

            <SuperTodolist tasks={tasks}>
                <SuperButton onClick={() => {}}>Default Button</SuperButton>
                <p>Привет!</p>
                <p>Привет!</p>
                <p>Привет!</p>
            </SuperTodolist>

            <SuperTodolist tasks={tasks}>
                <input type="text"/>
                <input type="text"/>
                <p>Привет!</p>
                <p>Привет!</p>
                <input type="text"/>
                <input type="text"/>
                <p>Привет!</p>
                <p>Привет!</p>
                <input type="text"/>
            </SuperTodolist>
        </div>
    );
}

export default App;