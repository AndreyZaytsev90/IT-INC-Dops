import React, {useEffect, useRef, useState} from 'react';
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
    const [newTitle, setNewTitle] = useState<string>('')

    console.log(todos)
    /*   const [shouldFetch, setShouldFetch] = useState(false);

       useEffect(() => {
           if (shouldFetch) {
               fetch('https://jsonplaceholder.typicode.com/todos')
                   .then(response => response.json())
                   .then(json => {
                       setTodos(json);
                       setShouldFetch(false);
                   });
           }
       }, [shouldFetch]);

       const onClickGetTodosHandler = () => {
           setShouldFetch(true);
       };*/
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
        const newTask: TodosType = {userId: todos.length+1, id: todos.length+1, title: newTitle, completed: false}
        setTodos([newTask, ...todos])
        setNewTitle('')
    }


    return (
        <div>
            <div>
                <Input newTitle={newTitle} setNewTitle={setNewTitle}/>
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