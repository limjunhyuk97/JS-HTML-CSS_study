// 문제 1번 solution
// factorial 함수
function factorial(value){
    if(value === 1){
        return 1;
    }
    else{
        return value * factorial(value - 1);
    }
}
// factoiral 함수를 담아서 배열로 반환하는 함수
// console.log(배열); 을 하면 [ , , ] 꼴로 배열이 출력되는구나!
function calculate(value){
    let numbers = [];
    for(let i =0; i<value; ++i){
        numbers.push(factorial(i+1));
    }
    console.log(numbers);
    return numbers;
}


// 문제 2번 solution
const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];
function filterId(peopleArray){
    const expChar = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    const expNum = /[(0-9)]/gi;
    let newArr =[];
    for(let i = 0; i <peopleArray.length; ++i){
        if(expNum.test(peopleArray)){
            newArr[i] = peopleArray[i].replace(expNum, "");
        }
        if(expChar.test(peopleArray[i])){
            peopleArray.splice(i,1);
            --i;
        }
    }
    return newArr;
}


// 문제 3번 solution
// 점수는 3종류, 사람 수는 여러 명.
const grades = [[88,76,77], [33,44,44], [90,100,94], [30,44,98]];
function scoreAverage(studentScore){
    let averageScore = [];
    let averageTopScore = 0;
    for(let i =0; i<studentScore.length; ++i){
        let sum = 0;
        let MAX = 0;
        for(let j = 0; j<studentScore[i].length; ++j){
            if(MAX<studentScore[i][j]){
                MAX = studentScore[i][j];
            }
            sum+=studentScore[i][j];
        }
        averageScore.push(sum/3);
        averageTopScore += MAX;       
    }
    console.log(`average score : ${averageScore}, average of highest score : ${averageTopScore/studentScore.length}`);
}


// 문제 4번 solution
import { data } from './w1_m2_object_ex.js';
function numType2array(){
    let ansArray = [];
    for(let level_1 in data){
        for(let level_2 in data[level_1]){
            if(typeof data[level_1][level_2] === 'number'){
                ansArray.push(level_2);
            }
        }
    }
    return ansArray;
}
console.log(numType2array());
