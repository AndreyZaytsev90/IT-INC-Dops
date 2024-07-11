import React, {RefObject, useEffect, useRef, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Input} from "./components/Input";

type TodosType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([]);
    const [shouldFetch, setShouldFetch] = useState(false);
    /*const [newTitle, setNewTitle] = useState<string>('')*/
    const inputRef: RefObject<HTMLInputElement> = useRef(null);
    console.log(todos)
    const onClickGetTodosHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTodos(json)
                setShouldFetch(true)
            });
    }

    const onClickRollbackHandler = () => {
        //setTodos([])
        setShouldFetch(false)
    }

    const addNewTask = () => {
        if (inputRef.current){
            const newTask: TodosType = {
                userId: todos.length+1,
                id: todos.length+1,
                title: inputRef.current.value,
                completed: false
            }
            setTodos([newTask, ...todos])
            inputRef.current.value = ''
            //setNewTitle('')
        }
    }

    return (
        <div>
            <div>
                <Input inputRef={inputRef}/>
                {/*<Input newTitle={newTitle} setNewTitle={setNewTitle}/>*/}
                <Button name='+' callback={addNewTask}/>
            </div>
            {
                !shouldFetch
                    ? <Button name="Get todos" callback={onClickGetTodosHandler}/>
                    : <div>
                        <Button name="Rollback" callback={onClickRollbackHandler}/>
                        <ul>
                            {todos.map((el, index) => (
                                <li key={el.id}>
                                    <span>{index + 1} - </span>
                                    <span>{el.title}</span>
                                    <input type="checkbox" checked={el.completed} readOnly/>
                                </li>
                            ))}
                        </ul>
                    </div>
            }
        </div>
    );
}

export default App;