// p2
function gradingStudents(grades) {
    let newGrades = grades.map((element, index, grades) =>{
        if(element<38) return element;
        else{
            return rounding(element);
        }
    })
    return newGrades;
}
function rounding(score){
    if(score % 5 === 0 ) return score;
    else if((score % 5) >=1 && (score % 5) <=2){
        return score;
    }
    else{
        return score - (score % 5) + 5;
    }
    
}

//p3
function compareTriplets(a, b) {
    let compareResult = [0, 0];
    for(let i = 0 ;i < 3; ++i){
        if(a[i] > b[i]) ++compareResult[0];
        else if(a[i] < b[i]) ++compareResult[1];
        else continue;
    }
    return compareResult;
}

//p4
function aVeryBigSum(ar) {
    let sum = BigInt(0);
    for(let i =0; i <ar.length; ++i){
        sum += BigInt(ar[i]);
    }
    return sum;
}

//p5
function timeConversion(s) {
    let tempArray = s.split(":");
    let sec = tempArray[2].substring(0,2);
    let ap = tempArray[2].substring(2,4);
    tempArray.pop();
    tempArray.push(sec);
    if(ap === "PM"){
        let newString;
        if(parseInt(tempArray[0])<12){
            let tempHour = parseInt(tempArray[0]) + 12;
            tempArray.splice(0,1,tempHour);
            newString = tempArray.join(':');
            return newString;
        }
        else{
            newString = tempArray.join(':');
            return newString;
        }
    }
    else{
        let newString;
        if(parseInt(tempArray[0]) == 12){
            tempArray.splice(0,1,"00");
            newString = tempArray.join(':');
            return newString;
        }
        else{
            newString = tempArray.join(':');
            return newString;
        }
    }
}


//p6
function kangaroo(x1, v1, x2, v2) {
    if(x1<x2){
        if(v1<=v2) return no();
        else{
            if(Number.isInteger((x2-x1)/(v1-v2))) return yes();
            else return no();
        }
    }
    else if(x1>x2){
        if(v1>=v2) return no();
        else{
            if(Number.isInteger((x1-x2)/(v2-v1))) return yes();
            else return no();
        }
    }
    else{
        if(v1 !== v2) return no();
        else return yes();
    }

}
function no(){
    return "NO";
}
function yes(){
    return "YES";
}
