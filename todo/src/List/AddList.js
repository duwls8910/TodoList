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
//여기서 dayLoop과 1회성 이벤트를 나눌 option을 만들 예정
const Option = styled.option`
  border: 2px solid limegreen;
  border-radius: 2px;

`

function AddList({addlistData, addOneTimeEvent}) {
//value는 인풋에 작성된 내용
  const [value, setValue] = useState('') ;
  const [isLoop, setIsLoop] = useState(true); // 

  function handleChange(e){
    setValue(e.target.value)
    console.log(e.target.value)
  }


  function handleBtnClick(){
    //addlistData(value);
    //여기서 조건문을 걸어주자. if option === loopEvent => addListData(value)
    isLoop ? addlistData(value) : addOneTimeEvent(value);
    //isLoop이 참이면 Loop Event에 입력한 값을 넣어주고, 거짓이면 dailyEvent에 값을 넣어준다. 
  }
  return (
    <div>
        <select>
          <option value="oneTimeEvent">One-time event</option>
          <option value="loopEvent">Daily Loop event</option>
        </select>
        <Input type='text' name="text" onChange={handleChange} placeholder ='적어요 일정'/>
        <Button onClick ={handleBtnClick}> 일정추가 </Button>
      
    </div>
  )
}


export default AddList;