import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = ({money}: CurrentBankomatPropsType) => {

    return (
        <>
            {money.banknotes === 'Dollars'
                ? <BanknoteGreen>
                    <Name>{money.banknotes}</Name>
                    <Value>{money.value}</Value>
                </BanknoteGreen>
                : <BanknoteBlue>
                    <Name>{money.banknotes}</Name>
                    <Value>{money.value}</Value>
                </BanknoteBlue>
            }
        </>
    );
};

const BanknoteGreen = styled.div`
  background-color: greenyellow;
  width: 300px;
  height: 150px;
  margin: 10px;
  border-radius: 10px;
`

const BanknoteBlue = styled.div`
  background-color: #61dafb;
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
