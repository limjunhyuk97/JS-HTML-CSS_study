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

// testcase
getArea('circle', 2);
getArea('circle', 1, 5);
getArea('circle', 2, 5);
getArea('rect', 2, 4);
getArea('trapezoid', 1, 4, 5);
printExecutionSequence(executeList);
