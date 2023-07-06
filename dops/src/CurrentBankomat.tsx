import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        props.money.banknotes === 'Dollars'
            ? <Green>
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
                <div>{props.money.number}</div>
            </Green>
            :
            <Blue>
                <Name>{props.money.banknotes}</Name>
                <Nominal>{props.money.value}</Nominal>
                <div>{props.money.number}</div>
            </Blue>

        /*   <span>
          <div>{props.money.banknotes}</div>
          <div>{props.money.value}</div>
           <div>{props.money.number}</div>
       </span>*/
    );
};


const Green = styled.div`
  background-color: palegreen;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Blue = styled.div`
  background-color: deepskyblue;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 20px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  font-size: 90px;
`
