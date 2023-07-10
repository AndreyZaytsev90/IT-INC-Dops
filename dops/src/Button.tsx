import React from 'react';

type ButtonPropsType = {
    title: string
    callback: () => void
}

export const Button: React.FC<ButtonPropsType> = ({title, callback}) => {

    const onClickHandler = () => {
        callback()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{title}</button>
        </div>
    )
}
