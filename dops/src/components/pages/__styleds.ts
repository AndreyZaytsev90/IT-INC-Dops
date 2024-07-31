import styled from "styled-components";

const NavWrapper = styled.button`
  margin-left: 10px;
  font-size: 20px;
  
  // & - родительский тэг
  & > a {
    text-decoration: none;
    color: #1e3789
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff
  }

  & > a:hover {
    color: steelblue;
  }
`

export const s = {
    NavWrapper
}