import { useRef, useState } from "react";
import Dayloop from "./Dayloop";
import TodoItem from "./TodoItem";
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

function AddList() {
//value는 인풋에 작성된 내용
  const [value, setValue] = useState('') ;
  const [data, setDate ] = useState('');
  const inputRef = useRef(null);

  function handleChange(e){
    setValue(e.target.value)
  }
  function handleBtnClick(){
    setDate(value);
    inputRef.current.focus();

  }
console.log(value)
  return (
    <div>
        <Input type='text' name="text" ref={inputRef} onChange={handleChange} placeholder ='적어요 일정'/>
        <Button onClick ={handleBtnClick}> 일정추가 </Button>

      <Dayloop todos={data}/> 
      <TodoItem/>
    </div>
  )
}
//

export default AddList;