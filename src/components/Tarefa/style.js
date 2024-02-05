import styled from "styled-components";

export const StyleTarefa = styled.div`

  border-bottom: 1px solid gray;
  padding: 20px;
  display: flex;
  justify-content: space-between;

  button{
    background-color: transparent;
    border: none;
    font-size: 30px;
    color: #666666;
    cursor: pointer;

    &:hover{
      color: red;
    }
  }

  &:last-child{
    border: none;
  } 

`

