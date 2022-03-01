import { useRef, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background:palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`
const Input = styled.input`
  border: 2px solid palevioletred;
  border-radius: 3px;
  padding: 0.25em 1em;
  
`

function AddList({addlistData}) {
//value는 인풋에 작성된 내용
  const [value, setValue] = useState('') ;


  function handleChange(e){
    
      setValue(e.target.value)
      console.log(e.target.value)
    
    
  }

  function handleBtnClick(){
      addlistData(value);
  }
  return (
    <div>
      
        <Input type='text' name="text" onChange={handleChange} placeholder ='적어요 일정'/>
        <Button onClick ={handleBtnClick}> 일정추가 </Button>
      
    </div>
  )
}


export default AddList;