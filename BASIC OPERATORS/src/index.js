//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.
//if it is not a number the return Invalid Operator


//write a function to return the value based on operator.
function basicOp(operation,value1,value2){
      if((typeof(value1)==="number")&&(typeof(value2)==="number")){
        if(operation==='/'){
          return eval(`${value1} ${operation} ${value2}`);
        }
        else if(operation==='-'){
          return eval(`${value1} ${operation} ${value2}`);
        }
        else if(operation==='*'){
          return eval(`${value1} ${operation} ${value2}`);
        }
        else if(operation==="+"){
          return eval(`${value1} ${operation} ${value2}`);
        }
        else{
            return "Invalid Operator";
      }
}}
