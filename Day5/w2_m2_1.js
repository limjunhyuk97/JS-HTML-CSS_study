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
    
    // runInfo는 3번 문제에 대한 source code.
    runInfo(){

    }

    thinDown(data){
        let dataArray = data.split("");
        for(let i = 0; i <dataArray.length ; ++i){
            if(dataArray[i] === ','){
                dataArray.splice(i,1);
                --i;
            }
        }
        return dataArray;
    }
    
}
