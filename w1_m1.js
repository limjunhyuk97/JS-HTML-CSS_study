// 기초부터 시작하는 JAVA SCRIPT
/* 
    -------------------------------------------------- Basic Variable --------------------------------------------------

    1.
    var, let, const 변수 선언 
    : var - 선언 후에 재선언 가능. 재할당 가능. 마구잡이로 할당 가능함. 나중에 꼬일 수 있음
          - 호이스팅(var 선언문이나, function 선언문을 해당 스코프의 선두로 옮기는 것) 시에 선언과 초기화 동시에 일어남.
    : let - 선언 후에 재선언 불가. 재할당 가능.
          - 호이스팅X. 선언과 초기화 단계 분리
    : const - 선언 후에 재선언 불가. 재할당 불가.

    고정된 값이면 const를 이용하는 것이 좋고, 그렇지 않다면 let을 사용하자.
    (* 참고로 선언 > 초기화 > 할당 순서임.)

    2.
    초기화 시에, 정수 초기화(' ' 붙이지 않음.) / 문자열 초기화(' ' 붙여야 함.) / 배열 초기화( = []; 대괄호로 씌운다.) / 불대수 초기화 가능

    3.
    typeof() 함수를 사용하면 무슨 타입인지를 반환해 준다.

    4.
    출력은 console.log(''); 으로 이루어진다.

    -------------------------------------------------- Basic Variable --------------------------------------------------

    1.
    number.toFixed(n)               // number 수의 소수점 n자리 까지 나타냅니다.
    number.toPrecision(n)           // number 수의 총 자리수를 n자리로 제한합니다.

    2.
    String 타입으로 받아들인 수를 Number 타입으로 바꾸는 법!
    Number(String머시기..); 를 이용한다!
    ex) console.log(Number(mynumber) + 3);

    3.
    basic operator :     +     -     *     /     %     **
    (특이한 점)
    1. / 계산은 몫만 출력하는 계산이 아니라, 소수점까지 출력되는 나누기 계산이라는 것.
    2. ** 계산은 exponent(거듭제곱) 계산이란 것.
       Math.pow(num, num); 과 용법이 비슷하다. : Math.pow(3,5) === 3**5;

    4.
    increment, decrement operator :     ++     --
    (특이한 점)
    1. prefix(후위), postfix(전위)에 따라서 연산이 되기 전에 출력되고, 연산이 된 후에 출력된다.

    5.
    assignment operator :     ==     +=     -=     /=     *=

    6.
    comparison operator :     ===     !==     <     >     <=     >=

*/

console.log('/n');

const PI = Math.PI;
let executeList = [];

function insert2List(string_1){
      executeList.push(string_1);
}

function printExecutionSequence(array){
      let print_arr = array.join("\n");
      console.log(print_arr);
}

function getArea(shape, radius, value_1, value_2){
      if(shape === 'circle'){
            if(arguments.length === 2){
                  console.log(Math.pow(radius,2) * PI);
                  insert2List(`${shape}, ${radius} : computed area = ${Math.pow(radius,2) * PI}.`);
            }
            else{
                  let sum =0;
                  for(let i=radius; i<=value_1; ++i){
                        sum += (Math.pow(i,2) * PI);
                  }
                  console.log(sum);
                  insert2List(`${shape}, ${radius}, ${value_1} : computed area = ${sum}.`);

            }
      }
      else{
            if(shape === 'rect'){
                  console.log(radius * value_1);
                  insert2List(`${shape}, ${radius}, ${value_1} : computed area = ${radius * value_1}.`);

            }
            else if(shape === 'trapezoid'){
                  console.log( (radius + value_2) * value_1 / 2);
                  insert2List(`${shape}, ${radius}, ${value_1}, ${value_2}} : computed area = ${(radius + value_2) * value_1 / 2}.`);  

            }
            else{
                  console.log("Not a valid input");
            }
      }
}

getArea('circle', 2);
getArea('circle', 1, 5);
getArea('circle', 2, 5);
getArea('rect', 2, 4);
getArea('trapezoid', 1, 4, 5);
printExecutionSequence(executeList);