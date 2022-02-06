import { useRef, useState } from "react";
import Dayloop from "./Dayloop";
import TodoItem from "./TodoItem";

function AddList() {
//value는 인풋에 작성된 내용
  const [value, setValue] = useState('') ;
  const [ date, setDate ] = useState('');
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
        <input type='text' name="text" ref={inputRef} onChange={handleChange} />
        <button onClick ={handleBtnClick}> ADD List</button>

      <Dayloop text={date}/> 
      <TodoItem/>
    </div>
  )
}
//

export default AddList;