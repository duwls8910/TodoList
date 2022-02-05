import { useState } from "react";
import Dayloop from "./Dayloop";

function AddList() {

  const [value, setValue] = useState({id: 1, text: '', checked: false}) ;
  const [isAddBtn, setAddBtn] = useState(false);


  function handleChange(e){
    setValue(e.target.value);
    console.log(setValue)
  }

  return (
    <div>
      <form>
        <input type='text' value={value.text} name="text" onChange={handleChange} />
        <button
        type="submit"
        onClick ={ () =>{
          setAddBtn(!isAddBtn);
        }}
        >
          ADD List
        </button>
        {isAddBtn && <Dayloop text={"props전달"}/>}
      </form>
    </div>
  )
}


export default AddList;