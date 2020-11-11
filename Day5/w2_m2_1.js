class objectAnalyze{
    constructor(){
        this.number = [];
    }

    run(data){
        this.number.length = 0;
        let leftBraketNum = 0, rightBraketNum = 0;
        let dataArray = this.thinDown(data);
        dataArray.forEach((element, index) => {
            if(element === '[') ++leftBraketNum;
            else if(element === ']') ++rightBraketNum;
            else if(!isNaN(element)) this.number.push(element);
        });
        console.log(`원소는 ${this.number} 들이 존재합니다.`)
        if(leftBraketNum !== rightBraketNum) console.log('닫는 괄호가 일치하지 않습니다.')
        else console.log(`깊이 수준은 ${leftBraketNum}이며, 총 ${this.number.length}개의 원소가 포함되어 있습니다!`)
    }
    
    // 3번 문제 source code 들어갈 예정입니다.
    runInfo(data){
        let dataArray = this.thinDown(data);
        dataArray.forEach((element, index) => {



        })
    }

    thinDown(data){
        let splitArray = data.split("");
        let dataArray = [];
        let flag = 0, tmp = 0;
        for(let i = 0; i <splitArray.length ; ++i){
            if(!isNaN(splitArray[i]) && flag === 0){
                flag =1;
                tmp = i;
            }
            else if(isNaN(splitArray[i]) && flag ===1){
                flag = 0;
                dataArray.push(splitArray.slice(tmp, i).join(''));
                dataArray.push(splitArray[i]);
            }
            else if(!isNaN(splitArray[i]) && flag === 0) continue;
            else dataArray.push(splitArray[i]);
        }
        return dataArray;
    }

}
