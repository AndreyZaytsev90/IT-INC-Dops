import React, {useEffect, useRef, useState} from 'react';
import './App.css'
import {Input} from "./components/Input";
import {Button} from "./components/Button";

type PropsType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {


    const [todos, setTodos] = useState<PropsType[]>([])
    //const [newTitle, setNewTitle] = useState('')
    const newTitle = useRef<HTMLInputElement>(null)


    const responseTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        responseTodos()
    }, [])


    const addTodos = () => responseTodos()

    const deleteTodos = () => {
        setTodos([])
    }

    const addTodo = () => {
        if(newTitle.current) {
            const newTodo = {userId: todos.length + 1, id: todos.length + 1, title: newTitle.current.value, completed: false}
            setTodos([newTodo, ...todos])
            newTitle.current.value = ''
        }
        //setNewTitle('')
    }

    return (
        <div className='App'>
            <Button name={'Add Todos'} callback={addTodos}></Button>
            <Button name={'Delete Todos'} callback={deleteTodos}></Button>
            {/*<Input title={newTitle} setNewTitle={setNewTitle}/>*/}
            <Input title={newTitle}/>
            <Button name={'Add Todo'} callback={addTodo}></Button>
            {todos.map((el) => {
                return (
                    <ol key={el.id}>
                        <span>{el.userId} - </span>
                        <span>{el.id} </span>
                        <span>{el.title} </span>
                        <input type='checkbox' checked={el.completed}/>
                    </ol>
                )
            })}
        </div>
    );
}


export default App;
