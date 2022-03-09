function Data() {
  const parsedDate = new Date().toLocaleDateString('ko-kr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const parsedDay = new Date().toLocaleDateString('ko-kr', {
    weekday: 'long'
  })
  
  return (
    <span
      className = "data"
    >{parsedDate} {parsedDay}</span>
    
  )
}


export default Data;