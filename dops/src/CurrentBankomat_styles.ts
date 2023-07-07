import styled from "styled-components";


const Banknotes = styled.div`
  background-color: ${props => {
    return props.color
}};
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

export const S = {
    Banknotes,
    Name,
    Nominal
}