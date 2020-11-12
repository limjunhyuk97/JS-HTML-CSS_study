class objectAnalyze{
    constructor(){
        this.number = [];
    }

    run(data){
        this.number.length = 0;
        let braketNum = 0, MAX = 0;
        let dataArray = this.thinDown(data);
        dataArray.forEach((element, index) => {
            if(element === '['){
                ++braketNum;
                if(braketNum>MAX) MAX = braketNum;
            }
            else if(element == ']'){
                --braketNum;
            }
            else if(!isNaN(element)) this.number.push(element);
        });
        if(braketNum !== 0) console.log('닫는 괄호가 일치하지 않습니다.');
        else console.log(`깊이 수준은 ${MAX}이며, 총 ${this.number.length}개의 원소가 포함되어 있습니다!`);
    }
    
    // 3번 문제 
    runInfo(data, dataType){
        if(!this.check(data)) return console.log('닫는 괄호가 일치하지 않습니다.');
        let newData = this.thinDown(data);
        if(typeof(dataType) === undefined){
            console.log(`"type" : "root" , "child" : ${[this.runInfo(newData.splice(0,1), newData[1])]}`);
        }
        else if(typeof(dataType) === string){
            console.log(`type : "array" , "child" : ${}`)
        }

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
            else if(!isNaN(splitArray[i]) && flag === 1) continue;
            else dataArray.push(splitArray[i]);
        }
        return dataArray;
    }

    check(data){
        let braketNum = 0, MAX = 0;
        let dataArray = this.thinDown(data);
        dataArray.forEach((element, index) => {
            if(element === '['){
                ++braketNum;
                if(braketNum>MAX) MAX = braketNum;
            }
            else if(element == ']'){
                --braketNum;
            }
        });
        if(braketNum !== 0) return false;
        else return true;
    }

}
