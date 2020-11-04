/****************************************************************************************************/
// 문제 1번 : 숫자 말하기 
// 써먹은거 : 배열 새로 할당, .toString()로 진법 변환, 함수 설정, template literal, .join으로 묶기.
// foreach함수를 for문으로 완전히 대체할 수 있게 바꿔 줄 필요가 있음
// solution 형식한가지 종류 더 만들어보기.

let numberArray = new Array();
let parsedArray = new Array();

function gameAnalyzer(numeral, number, people){
    for(let i=0; i < number * people; ++i){
        numberArray[i] = i.toString(numeral);
        for(let j = 0; j < numberArray[i].length; ++j){
            parsedArray.push(`"${numberArray[i][j]}"`);
        }
    }
}

function printit(array){
    console.log(array.join(', '));
}

function solution(numeral, number, people){
    numberArray.length = 0;
    parsedArray.length = 0;
    gameAnalyzer(numeral, number, people);
    printit(parsedArray);
}

/****************************************************************************************************/
// 문제 2번 : 길동이의 차례에 뭘 말해야댐?
// foreach함수를 for문으로 완전히 대체할 수 있게 바꿔 줄 필요가 있음

function findingTurn(numeral, number, people, order){
    numberArray.length = 0;
    parsedArray.length = 0;
    gameAnalyzer(numeral, number, people);
    console.log(`길동이는 ${order}번째 이니까..`);
    if(order === people){
        for(let i =0; i<parsedArray.length; ++i){
            if((i+1)%people === 0){
                console.log(`길동이는 "${parsedArray[i]}"를 말해야겠네요.`)
            }
        }n
    }
    else{
        for(let i=0; i<parsedArray.length; ++i){
            if((i+1)%people === order){
                console.log(`길동이는 "${parsedArray[i]}"를 말해야겠네요.`)
            }
        }
    }
}

/***************************************************************************************************/
// 문제 3번 : n진수까지 확장해줘
// 써먹은 거 : 배열을 초기화 하는 방식 : 1. for loop돌리기 / 2. length값을 0으로 설정해버리기. / 3. 배열 자체를 빈배열로 설정해 버리는 것.
// 문제 발생 : solution과 findingturn 함수에서 gameAnalyzer를 부를때마다, push가 일어나서 push가 중복되어서 일어남. -> 문제 해결 : 각 함수마다 시작 시에 배열을 초기화 시켜준다


/***************************************************************************************************/
// TestCase.
solution(16, 3 ,5, 2);
findingTurn(16, 3, 5, 2);


/****************************************************************************************************/
// 문제 1번에서 업그레이드 된 함수 구현하기 요구.

/*
let personAddedParsedArray = new Array();
*/
/*
function evovledSolution(numeral, number, people){
    solution(numeral, number, people);
    for(let i=0; i<parsedArray; ++i){
        if(i%people === 0){

        }
    }

    console.log(personAddedParsedArray.join(', '))
}
*/
