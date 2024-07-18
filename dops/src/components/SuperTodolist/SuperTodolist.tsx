import {TasksProps} from "../../App";
import React from "react";

type SuperTodolistProps = {
    tasks: TasksProps[]
    children: React.ReactNode
}

export const SuperTodolist: React.FC<SuperTodolistProps> = (props) => {

    const {tasks, children, ...restProps} = props

    return (
        <div>
            <hr/>
            <ul>
                {tasks.map((t) => {
                    return (
                        <div key={t.id}>
                            <input type={"checkbox"} checked={t.isDone}/>
                            {t.title}
                        </div>
                    )
                })}
            </ul>
            {children}
            <hr/>
        </div>
    );
};