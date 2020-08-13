let sign = "subtract";
var num1 = 20;
var num2 = 5;



function calculator(sign){
  if(sign === 'add'){
    answer= num1 + num2;
    //console.log(answer);
    return answer;
  }else if(sign === 'subtract'){
    answer= num1 - num2;
    //console.log(answer);
    return answer;
  }else if(sign === 'divide'){
    answer= num1 / num2;
    //console.log(answer);
    return answer;
  }else if(sign === 'multiply'){
    answer= num1 * num2;
    //console.log(answer);
    return answer;
  }else{
    console.log(sign, "Is Not a excepted sign.");
  }


}

calculator(sign);





// const answer = calculator("add", 4, 2)
// console.log(answer) // 6
// answer = calculator("subtract", 4, 2)
// console.log(answer) // 2
// answer = calculator("divide", 4, 2)
// console.log(answer) // 2
// answer = calculator("multiply", 4, 2)
// console.log(answer) // 8
