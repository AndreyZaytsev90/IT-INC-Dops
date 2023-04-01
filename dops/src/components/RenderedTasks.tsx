import React, {ChangeEvent} from 'react';
import {Button} from "./Button";
import {TasksType} from "../App";

export type RenderedTasksPropsType = {
    todolistId: number
    tasks: TasksType[]
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: number) => void
    removeTask: (taskId: string, todolistId: number) => void
}

export const RenderedTasks = (props: RenderedTasksPropsType) => {
    return (
        <ul>
            {props.tasks.map(t => {
                const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    let newIsDoneValue = e.currentTarget.checked;
                    props.changeTaskStatus(t.taskId, newIsDoneValue, props.todolistId);
                }

                const removeTaskHandler = () => {
                    props.removeTask(t.taskId, props.todolistId)
                }

                return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                    <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                    <span>{t.title}</span>
                    {/*<button onClick={() => {'removeTask'}}>x</button>*/}
                    <Button name={'x'} callback={removeTaskHandler}/>
                </li>
            })}
        </ul>
    )
};
