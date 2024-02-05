import styled from "styled-components";


export const StyleForm = styled.div`
max-width: 540px;
margin: 0 auto;
position: relative;
top: -140px;
display: flex;
padding: 10px;


input{
  width: 425px;
  height: 54px;
  border: none;
  padding-left: 0%;
}

button{
  height: 54px;
  width: 105px;
  background-color: #005275;
  border: solid 1px white;
  color: white;
  margin-left: 10px;


  &:hover{
  background-color: black;
}
}
`
export const StyleList = styled.div `


  max-width: 540px;
  background-color: white;
  margin: 0 auto;
  position: relative;
  top: -80px;
  padding-top: 20px;
  box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.10);

   h2{
    text-align: center;
    padding-bottom: 20px;
   }

`

