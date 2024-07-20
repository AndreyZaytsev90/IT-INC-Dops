import { ChangeEvent, RefObject, useRef, useState } from "react";

type InputType = {
  /*newTitle: string
  setNewTitle: (newTitle: string) => void*/
  inputRef: RefObject<HTMLInputElement>
}
export const Input = ({
  /*newTitle,*/
  /*setNewTitle*/
  inputRef
}: InputType) => {
  //Есть проблема, что каждый ввод символа в инпут вызывает перерендер приложения. Попробуем использовать юзРеф. Но нужно вывести его наверх в глобальное окружение
  /*const inputRef = useRef(null)*/

  return (
    <input ref={inputRef}
    /*  onChange={onChangeHandler}
      value={newTitle}*/
    />
  );
};



//------------------------до useRef ------------------------------------
/*

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
};*/
