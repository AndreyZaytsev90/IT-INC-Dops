import React, {useEffect, useState} from 'react';
import './App.css'
import {Input} from "./components/Input";

type PropsType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

function App() {


    const [todos, setTodos] = useState<PropsType[]>([])

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
        const newTodo = {userId: 201, id: 2023, title: 'NEW TODO', completed: false}
        return setTodos([newTodo, ...todos])
    }

    return (
        <div className='App'>
            <button onClick={addTodos}>ADD NEW DATA</button>
            <button onClick={deleteTodos}>Delete Todos</button>
            <Input callback={addTodo}/>

            {todos.map((el) => {
                return (
                    <ol>
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
