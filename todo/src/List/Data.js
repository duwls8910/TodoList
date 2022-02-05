function Data() {
  const parsedDate = new Date().toLocaleDateString('ko-kr');
  
  return (
    <span
      className = "data"
    >{parsedDate}</span>
  )
}


export default Data;