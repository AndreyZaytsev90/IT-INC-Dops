import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filter: BanknotsType) => void// давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
    setMoney: (data: MoneyType[]) => void
}

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        // засетаем 'All'
        props.setFilterValue('All')


    }

    const setDollars = () => {
        // засетаем 'Dollars'
        props.setFilterValue('Dollars')

    }

    const setRUBLS = () => {
        // засетаем 'RUBLS'
        props.setFilterValue('RUBLS')

    }

    const onChangeHandler = () => props.setMoney(props.data)

    return (
        <div>
            <button onClick={setAll} onChange={onChangeHandler}>All</button>
            <button onClick={setDollars} onChange={onChangeHandler}>Dollars</button>
            <button onClick={setRUBLS} onChange={onChangeHandler}>RUBLS</button>
            <City data={props.data}/>
        </div>
    );
};

