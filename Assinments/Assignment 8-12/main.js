console.log("MyEach");
const things = [9, 25, 4, 100];

function myEach(aVar){
  for(let i= 0; i < aVar.length; i++){
  var num= i +1;
  console.log( num ,".", aVar[i]);
  }
}
myEach(things);

console.log("\nMyMap\nMuiltipled by 10");
function myMap(aVar){
  for(let i= 0; i < aVar.length; i++){
    console.log(aVar[i] * 10);
  }
}
myMap(things);

console.log("\nMyFilter\n")
var filtered =4;
function myFilter(aVar){
  for(let i= 0; i < aVar.length; i++){

    if(filtered != aVar[i]){
      console.log(aVar[i]);
    }
  }
  console.log("Number Filtered:", filtered);
}
myFilter(things);

console.log("\nMySome\n")
var inArray = 25;
function mySome(aVar){
  for(let i= 0; i < aVar.length; i++){
    if(inArray === aVar[i]){
      console.log(true);
    }else{
      console.log(false);
    }
  }

}
console.log("Is", inArray, "I the Array? ");
mySome(things)

console.log("\nMyEvery\n")
var isHigherThan = 1;
console.log("Is every Number in the array hogher than", isHigherThan);
function myEvery(aVar){
  for(let i= 0; i < aVar.length; i++){
    if(isHigherThan < aVar[i]){
      return true;
    }else{
      return false;
    }

  }

}
myEvery(things);

console.log("\nMyReduce\n");
var num1, num2;
var finalNum;
var x;
var y;
function myReduce(aVar){
  for(let i= 0; i < aVar.length; i++){



    //console.log(finalNum);
  }
  for(let j=0; j<aVar.length;j+2){

  }

}
myReduce(things);
