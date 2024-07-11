import {ChangeEvent, useState} from "react";

type InputType = {
    newTitle: string
    setNewTitle: (newTitle: string) => void
}
export const Input = ({newTitle, setNewTitle}: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)

    }

    return (
        <input onChange={onChangeHandler} value={newTitle}/>
    );
};