import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = ({money}: CurrentBankomatPropsType) => {

    return (
                <Banknote colors = {money.banknotes === "Dollars" ? "greenyellow" : "deepskyblue"}>
                    <Name>{money.banknotes}</Name>
                    <Value>{money.value}</Value>
                </Banknote>
    )}

type ColorType = {
    colors: "greenyellow" | "deepskyblue"
}

const Banknote = styled.div<ColorType>`
  background-color: ${props => props.colors};
  width: 300px;
  height: 150px;
  margin: 10px;
  border-radius: 10px;
`

const Name = styled.div`
 font-size: 30px;
`

const Value = styled.div`
  font-size: 90px;
`
