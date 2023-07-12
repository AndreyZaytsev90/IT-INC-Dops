import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {
    callback: () => void
}

export const Input = (props: InputPropsType) => {

    const [newTitle, setNewTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)

    }
    const onClickHandler = () => {
        props.callback()
    }

    return (
        <span>
             <input type="text" value={newTitle} onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>+</button>
        </span>

    );
};
