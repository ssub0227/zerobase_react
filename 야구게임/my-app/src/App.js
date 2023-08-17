import { useState,  useEffect } from 'react'
import './App.css';
import { generateRandomNumber} from './random'
import Logs from './Logs'

function App() {
  const [randomNumbers, setRandomNumber] = useState(generateRandomNumber());
  // useState : react 문법, 인자를 가져온다 -> generateRandomNumber 에서 값을 가져와서 변수 렌더링
  const [answer, setAnswer] = useState('');
  const [logs, setLogs] = useState([]);
  const [isSuccess, setSuccess] = useState(false);

  useEffect(() => {
    console.log(randomNumbers)
  }, [randomNumbers])

  /*
  useEffect(function, deps) : 컴포넌트가 렌더링 될때마다 특정 작업을 실행할 수 있게 함
  -> 생명주기 메소드를 함수형 컴포넌트에도 적용할 수 있다!! 

  1. component 가 mount 됐을 때 (처음 나타났을 때 )
  -> 처음 한 번만 실행하고 싶을 경우엔 콜백함수 뒤에 [] 빈배열을 넣는다. 
  배열 생략 시엔 리렌더링때마다 실행된다.

  2. component가 update 될 때 (특정 값이 바뀔 때)
  -> 배열자리에 검사하고 싶은 값을 넣는다

  3. component가 unmount 될 때(사라질떄) or update 되기 직전에
*/

  const handleAnswerChanged = (event) => {
    setAnswer(event.target.value);
    // event.target.value : input 에 입력한 값
  }

  const handleSubmit = () => {
    //console.log(answer) : 사용자가 입력한 value(answer) 찍기
    // 스트라이크, 볼, 정답 유무
    const answers = answer.split('').map(item => Number(item));

    // input 에 숫자가 아닌 문자가 들어올 경우
    if(answers.some(number=> isNaN(number))){
      // some : 조건값이 하나라도 true 가 나오면 true 를 반환 -> 숫자가 하나라도 아닐 경우(isNaN이 하나라도 true 일경우) true 반환
      alert('숫자만 입력해주세요')
      return;
    }
    // 4자리를 넘겼을때
    if(answers.length !== 4){
      alert('4자리 숫자만 입력해주세요.')
      return;
    }
    //배열에 중복숫자가 있을 경우 -> 인덱스 이게 뭔소린지 모르겠는데... 
    const isDuplicate = answers.some((number) => {
      return answer.indexOf(number) !== answer.lastIndexOf(number)
    })
    if(isDuplicate){
      alert('입력 값에 중복이 있어요.')  
      return;
    }


    const { strike, ball } = randomNumbers.reduce((prev, cur, index) => { // 누적값, 현재값, 순서 
      // 콜백
      // 같은 자리 같은 수 존재 : strike
      if(answers[index] === cur){ 
        return {
          ...prev, 
          // ... : 전개연산자 -> 여러개의 배열이나 객체를 합칠 떄 사용가능 
          //  strike : prev.strike,
          //  ball : prev.ball 가 펼쳐짐 
          strike: prev.strike + 1
        }
      }

      // 다른 자리에 수가 존재 : ball
      if(answers.includes(cur)){
        return {
          ...prev,
          ball: prev.ball + 1
        }
      }

      // 아무것도 없을 때
      return prev   
    },{
      // 기본값
      strike : 0,
      ball : 0
    })

    // 정답일 경우
    if(strike === 4){
      alert('정답입니다.')
      setLogs([...logs, `${answer} 정답입니다.`]);
      setSuccess(true);
      return;
    }
    
    setLogs([...logs, `${answer} (strike: ${strike}, ball: ${ball})`]) // ...logs 가 있는 이유 : li 생성시에 기존 log를 불러오고 방금 입력한 최종 logs 를 가져옴!
    // `` 를 사용하면 안의 내용은 전체 스트링이지만 내부적으로 변수를 사용 가능하다.
  }

  const handleRetry = () => {
    // 정답시 모든 값을 초기화..!!
    setRandomNumber(generateRandomNumber())
    setAnswer('')
    setLogs([])
    setSuccess(false)
  }

  return ( 
      <div className="App">
      <h1> 숫자 야구 게임 </h1> 
      <header className="header"> {isSuccess? `정답: ${answer}`: '----'} </header>  
      <section>
        <input type="text" value={answer} onChange={handleAnswerChanged } disabled={isSuccess}/>
        {
          isSuccess ? (
            <button onClick={handleRetry}>다시하기</button>
          ) : (
            <button onClick={handleSubmit}>맞춰보기</button>
          )
        }      
      </section >
      <Logs logs={logs} />
    </div>  
  );
}

export default App;