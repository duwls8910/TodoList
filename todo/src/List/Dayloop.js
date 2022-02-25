import '../App.css';

function Dayloop(todos) {
  let list = [{
    todos : '할일 적기'
  }];
console.log(todos)
  function listUp(){
    list = list.push(todos)
    
  }console.log(list)
  listUp()
  return(
    <div>
      <div className="dayloop-list">
        <input type= 'checkbox' /> 
        <div>
          {list.todos}
          </div>
      </div>
    </div>  
  )
}


export default Dayloop;
