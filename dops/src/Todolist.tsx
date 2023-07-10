import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {Button} from "./Button";


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
            addTaskButtonHandler()
        }
    }

    const removeTodolistButtonHandler = () => {
        props.removeTodolist(props.id)
    }

    const addTaskButtonHandler = () => {
        props.addTask(title, props.id)
        setTitle('')
    }

    const removeTaskButtonHandler = (taskId: string) => {
        props.removeTask(taskId, props.id)
    }

    const changeFilterButtonHandler = (filter: FilterValuesType) => {
        props.changeFilter(filter, props.id)
    }


    return <div>
        <h3> {props.title}
            {/* <button onClick={() => {'removeTodolist'}}>x</button>*/}
            <Button title={'X'} callback={removeTodolistButtonHandler}></Button>

        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <Button title={'+'} callback={addTaskButtonHandler}></Button>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }

                    /* const removeTaskButtonHandler = () => {
                         props.removeTask(t.taskId, props.id)
                     }*/

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        {/*<button onClick={() => {
                            'removeTask'
                        }}>x
                        </button>*/}
                        <Button title={'x'} callback={() => removeTaskButtonHandler(t.taskId)}></Button>
                    </li>
                })
            }
        </ul>
        <div>
            <Button title={'All'} callback={() => changeFilterButtonHandler('all')}></Button>
            <Button title={'Active'} callback={() => changeFilterButtonHandler('active')}></Button>
            <Button title={'Completed'} callback={() => changeFilterButtonHandler('completed')}></Button>
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


