import React, {ButtonHTMLAttributes} from "react";
import s from "./superButton.module.css"

type SuperButtonProps = {
    onClick: () => void,
    children: React.ReactNode
    //name: string
    color?: string
    disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>
export const SuperButton: React.FC<SuperButtonProps> = (props) => {

    const {
        onClick,
        //name,
        children,
        color,
        disabled,
        ...restProps
    } = props

    const onClickHandler = () => {
        onClick()
    }

    /* // Ignat's жжот
        const finalClassName = s.button
            + (disabled
                ? '' + s.disabled
                : color === 'red'
                    ? '' + s.red
                    : color === 'secondary'
                        ? '' + s.secondary
                        : '' + s.default)
            + (className ? ' ' + className : ' ')*/

    //const finalClassName = s.button + " " + s.red //работает(все кнопки красные)

    /*const finalClassName =
        `${s.button}
         ${color === 'red' ? s.red : s.secondary}` // работает*/

    /*const finalClassName =
         `${s.button}
          ${color === 'red' ? s.red : s.secondary}
          ${disabled ? s.disabled : ''}` // работает*/

    const finalClassName =
        `${s.button}
          ${color === 'red' ? s.red : color === 'blue'? s.secondary : s.default} 
          ${disabled ? s.disabled : ''}`


    return (
        <button onClick={onClickHandler} {...restProps} className={finalClassName}>{children}</button>
    );
};


//-----------------------------------------------------------------------------------------

/*
import React, {ButtonHTMLAttributes} from "react";

type SuperButtonProps = {
    onClick: () => void,
    name: string
} & ButtonHTMLAttributes<HTMLButtonElement>
export const SuperButton: React.FC<SuperButtonProps> = ({onClick, name, ...restProps}) => {

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button onClick={onClickHandler} {...restProps}>{name}</button>
    );
};
*/
