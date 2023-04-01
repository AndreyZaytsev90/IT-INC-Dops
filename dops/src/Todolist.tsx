import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {Button} from "./components/Button";
import {RenderedTasks} from "./components/RenderedTasks";


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }

    const addTaskHandler = () => {
        props.addTask(title, props.id)
        setTitle('')
    }

    const changeFilterHandler = (value: FilterValuesType) => {
        props.changeFilter(value, props.id)
    }

    return <div>
        <h3> {props.title}
            {/*<button onClick={() => {'removeTodolist'}}>x</button>*/}
            <Button name={'x'} callback={removeTodolistHandler}/>
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            {/*<button onClick={() => {'addTask'}}>+</button>*/}
            <Button name={'+'} callback={addTaskHandler}/>
            {error && <div className="error-message">{error}</div>}
        </div>
        <RenderedTasks
            todolistId={props.id}
            tasks={props.tasks}
            changeTaskStatus={props.changeTaskStatus}
            removeTask={props.removeTask}/>
        <div>
            <div className={props.filter === 'all' ? 'active-filter' : ''}>
                <Button name={'All'} callback={() => changeFilterHandler('all')}/>
            </div>

            <Button name={'Active'} callback={() => changeFilterHandler('active')}/>
            <Button name={'Completed'} callback={() => changeFilterHandler('completed')}/>
            {/* <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={() => {
                    }}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={() => {
                    }}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={() => {
                    }}>Completed
            </button>*/}
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


