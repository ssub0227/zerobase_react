// div, span, ol, li 등 소문자로 작성한 태그는 react에서 DOM 태그로 인식함
// 파일명, export 할 컴포넌트 이름은 대문자로 시작하게!!

const Logs = (props) => {
 return (
  <>
    <h2> 기록 </h2> 
    <ol>
      {
        props.logs.map((log, index) => {
          return (
            <li key={`${log}_${index}`}>{log}</li>
            // react 에서 반복문 사용시 key 값을 넣어줘야 한다.
          )
        })
      }
    </ol> 
  </>
 ) 
}

export default Logs;