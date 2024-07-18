import React, {ButtonHTMLAttributes} from "react";

type SuperButtonProps = {
    onClick: () => void,
    children: React.ReactNode
    //name: string
} & ButtonHTMLAttributes<HTMLButtonElement>
export const SuperButton: React.FC<SuperButtonProps> = (props) => {

    const {
        onClick,
        //name,
        children,
        ...restProps} = props

    const onClickHandler = () => {
        onClick()
    }

    return (
        <button onClick={onClickHandler} {...restProps}>{children}</button>
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
