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
        }
    }
    else{
        for(let i=0; i<parsedArray.length; ++i){
            if((i+1)%people === order){
                console.log(`길동이는 "${parsedArray[i]}"를 말해야겠네요.`)
            }
        }
    }
}

// Test Case
solution(16, 3 ,5);
findingTurn(16, 3, 5, 2);
