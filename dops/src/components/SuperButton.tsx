
type SuperButtonProps = {
    onClick: ()=> void,
    name: string
}
export const SuperButton = (props: SuperButtonProps) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};
