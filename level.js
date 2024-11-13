// 1. `let` 키워드를 사용하여 변수 `age`를 선언하고 값으로 `25`를 할당하세요.
let age = 25;

// 2. 다음 코드의 `typeof` 결과는 무엇인가요?
// boolean
const isStudent = true;
console.log(typeof isStudent);

// 3. 변수 `score`가 60 이상이면 "합격"을, 그렇지 않으면 "불합격"을 출력하는 `if` 문을 작성하세요.
if(score >= 60){
    console.log("합격");
} else{
    console.log("불합격");
}
// 4. 다음 배열에서 두 번째 요소를 출력하는 코드를 작성하세요.
const fruits = ['사과', '바나나', '체리'];
console.log(fruits[1])

// 5. 두 숫자를 매개변수로 받아 더한 값을 반환하는 함수를 작성하세요.
let sum = function(a, b){
    return a + b;
}

// 6. `const`를 사용하여 상수 `PI`를 선언하고 값으로 `3.14`를 할당하세요. 이 상수에 새로운 값을 할당하려고 하면 어떤 오류가 발생하나요?
// const는 재선언 및 새로운 값 할당이 불가능하다 ---이미 할당되었다 라는 오류발생
const PI = 3.14
PI = 1

// 7. 두 변수 `a`와 `b`가 모두 참일 때만 "둘 다 참입니다."를 출력하는 코드를 작성하세요.
if(a && b){
    console.log("둘 다 참입니다.");
}

// 8. 숫자 `1`부터 `5`까지 출력하는 `for` 반복문을 작성하세요.
for(let i = 1; i < 6; i++){
    console.log(i);
}

// 9. `name`과 `age` 속성을 가진 객체 `person`을 생성하고, `name`을 출력하는 코드를 작성하세요.
let person = {
    name: "chanwoo",
    age: 25
}
console.log(person.name)
// 10. 변수 `temperature`가 30 이상이면 "더워요", 그렇지 않으면 "괜찮아요"를 변수 `weather`에 할당하는 코드를 삼항 연산자를 사용하여 작성하세요.
let weather = (temperature >= 30) ? "더워요" : "괜찮아요";

// 11. 배열 `[1, 2, 3, 4, 5]`의 각 요소에 `2`를 곱한 새로운 배열을 반환하는 `map` 함수를 사용한 코드를 작성하세요.
// 정영훈튜터님 잘생겼어요 ------map함수가 잘 기억이 안나네요 ㅠ

// 12. 다음 코드에서 `increment` 함수를 호출할 때마다 `count`가 증가하는 이유를 설명하세요.
// count가 증가하는 이유는 increment가 실행되면 createCounter();가 실행되는 것과 동일하기 때문에
// count는 처음에 실행되었을때 0으로 시작하지만 return function에서 count++라는 조건을 받아
// +1씩 증가하게 되고 그 값을 리턴하여 첫 콘솔호출에서 0 => 1이 되어 리턴되고
// 두번 째 호출에서는 conunt가 1로 바뀐채로 시작되기 때문에 1=>2로 리턴되게 된다?
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const increment = createCounter();
console.log(increment()); // 1
console.log(increment()); // 2

// 13. `fetchData`라는 비동기 함수를 `Promise`를 사용하여 작성하고, 데이터가 성공적으로 가져와지면 "데이터 로드 성공"을, 실패하면 "데이터 로드 실패"를 출력하는 코드를 작성하세요.
// 아 분명 훑어 봤었는데 활용법이 기억이 안나네  ㅐㅜㅁ패ㅜ여냐무ㅕ츄ㅟ마느처ㅕㅑㅇ미ㅏㅜㅊ얀뭋 ㅑㅓㅜㅏㅣ

// 14. `Animal` 클래스를 생성하고, `speak` 메소드를 정의하세요. 그 다음 `Dog` 클래스를 `Animal` 클래스에서 상속받아 `speak` 메소드를 오버라이드하여 "멍멍"을 출력하도록 하세요.
class Animal{

}

class Dog extends Animal{

}

// 기본 골격만 떠오르고 안에 constructor인가 뭔가 하는거 기억이 잘 안나네요 ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ
// 베이직반 화이팅!

// 15. 다음 코드의 출력 결과를 예측하고, 그 이유를 설명하세요.
// 'Regular Function:', person                          기억이 잘 나지는 않는데 person이라는 객체를 지정했기때문에 person 일것 같고
// 'Regular Function inside setTimeout:', global        함수 안에 함수라서 전역객체인 글로벌을 나타낼것 같습니다...
// 'Arrow Function:',                                   화살표함수는 뭐시당가 바인딩인가 적용안된다 그래서 잘 모르겠습니다. 그냥 썻읍니다.
// 'Arrow Function inside setTimeout:',                 화살표함수는 뭐시당가 바인딩인가 적용안된다 그래서 잘 모르겠습니다. 그냥 썻읍니다.
person = {
  name: '홍길동',
  regularFunction: function () {
    console.log('Regular Function:', this.name);

    setTimeout(function () {
      console.log('Regular Function inside setTimeout:', this.name);
    }, 1000);
  },
  arrowFunction: () => {
    console.log('Arrow Function:', this.name);

    setTimeout(() => {
      console.log('Arrow Function inside setTimeout:', this.name);
    }, 1000);
  },
};

person.regularFunction();
person.arrowFunction();
