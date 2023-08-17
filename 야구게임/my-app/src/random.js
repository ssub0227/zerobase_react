export function generateRandomNumber() {
  // 1~9까지 숫자를 이용
  const candidates = [1,2,3,4,5,6,6,7,8,9];
  // 랜덤하게 섞어서 4자리 숫자만 이용
  const pickedNumbers = shuffle(candidates).splice(0,4); // 0번째에서 시작해서 4개뽑음 

  return pickedNumbers
}

function shuffle(array){
  // Math.random(), 0~1 까지 랜덤하게 뽑아주는 함수
  //array.sort(()=> 음수 반환시 내림차순, 양수 반환시 오름차순)
  return array.sort(()=>{
    return Math.random() - 0.5 
    //Math.random 함수가 0~1 (양수)만 뽑기때문에 -0.5를 통해 음양수 범위 조정, 소트에 사용
  })
}