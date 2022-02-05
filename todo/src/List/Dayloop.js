import '../App.css';

function Dayloop(todos) {

  return(
    <div>
      <div className="dayloop-list">
        <input type= 'checkbox' />{todos.text}
      </div>
    </div>  
  )
}

export default Dayloop;
