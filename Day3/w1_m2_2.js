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

