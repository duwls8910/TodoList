import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function TodoItem({todo}){
  const { id, text, checked } = todo;

  return(
  <section>
    <div>
      <input type='checkbox' value={checked} />
      {text}  
      <FontAwesomeIcon icon= { faTrash } />
    </div>
  </section>
  )
}
export default TodoItem;

//더미 데이터
// data는 내가 쓰는일정임 list에 받아온 데이터가 추가되야함
//이 컴포넌트에 데이터가 들어오면 어떻게 데이터를 정리해서 배열이나 객체에 넣고 맵핑 할 수 있을까?

//1.list 배열에 id와 text를 가진 객체를 넣는다 (addlist의 버튼 클릭시) 
//  id는 data 들어올때마다 +1한다.(삭제시 - 하지는 않는다. 중복 발생가능)
//2. 클릭발생시 인자를 두개 받는다 id,text.

// 해결할거+++
//글쓸때마다 추가할 방법 id와 텍스트 부분에 data받는법 
//아 씨마켓 훅스에서 장바구니 추가할때 어떻게했는지 확인해볼것  ---> 해결함

// 휴지통누르면 삭제 구현 item 에서  todolist로 상끌
