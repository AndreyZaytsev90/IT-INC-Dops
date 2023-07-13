import React, {ChangeEvent, RefObject, useState} from 'react';

export type InputPropsType = {
    title: RefObject<HTMLInputElement>
    //setNewTitle: (title: string) => void
}

export const Input = (props: InputPropsType) => {

    /*const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(e.currentTarget.value)
    }*/

    return (
      /*  <input type="text" value={props.title} onChange={onChangeHandler}/>*/
        <input ref={props.title}/>
    );
};


//----------------------------------------------------

/*
import React, {ChangeEvent, useState} from 'react';

export type InputPropsType = {
    title: string
    setNewTitle: (title: string) => void
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(e.currentTarget.value)
    }

    return (
        <input type="text" value={props.title} onChange={onChangeHandler}/>
    );
};*/
