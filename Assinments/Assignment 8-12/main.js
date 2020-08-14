const things = [9, 25, 4, 100];
console.log("Array:",things, "\n\n");

//1) MyForEach
console.log("MyEach");
//genralization test function
function expectedInput( arraytIndex, userInput){
  return (arraytIndex);
}
//implmentation of forEach
function myEach(array, expectedInput){
  for(let i= 0; i < array.length; i++){
  //return eleFEach(aVar[i]);
  // console.log(eleFEach(aVar[i]));
    
  console.log("Number:",expectedInput(array[i] ));
  }
  
}
console.log(myEach(things, expectedInput));

//2)MyForMap
console.log("\nMyMap");

//genralization test function
function mapMath(arrayIndex, secondNum) {
  return arrayIndex * secondNum;
}
//implmentation of ForMap
function myMap(array, Math, secondNum){
  let mapArray = [];
  for(let i= 0; i < array.length; i++){
    // console.log(aVar[i] * 10);
      if(i < array.length){
        mapArray.push( mapMath(array[i], secondNum));
    }
    
  }
  console.log(mapArray);
}
console.log(myMap(things, mapMath, 2));

//3)MyForFilter
console.log("\nMyFilter");

//genralization test function


function filterFromArray(arrayIndex, limitNum, signOperator){
  if(signOperator === "greater"){
    return arrayIndex > limitNum;
  }if(signOperator === "lesser"){
    return arrayIndex < limitNum;
  }
}
//implmentation of ForFilter
function myFilter(array, filterFromArray, limitNum,signOperator){
  let filterArray= [];
  for(let i= 0; i < array.length; i++){
  
    if(filterFromArray(array[i], limitNum, signOperator)){
      //console.log(aVar[i]); 
      filterArray.push(array[i]);
    }
  }  
  
  console.log(filterArray);
  
}
myFilter(things,filterFromArray, 10, "greater");


//4)MyForSome
console.log("\nMySome")

//genralization test function
function checkFor(numCheck, arrayIndex){
   return numCheck === arrayIndex;
  
}

//implmentation of ForSome
function mySome(array, condiction, numCheck ){
  var yes= 0;
    console.log("Is", numCheck, "In the Array? ");
  for(let i = 0; i< array.length; i++){
 
    if(checkFor(numCheck, array[i])){
      yes =1;
      //return true;
      console.log(true);
    }
  }
  if(yes === 0){
    //return false;
    console.log(false)
  }

}


mySome(things, checkFor(), 9);




//5)MyForEvery
console.log("\nMyEvery")

//genralization test function
function eleFEvery(element){
  var test =1;
  return test;
}

//implmentation of ForEvery
function myEvery(aVar){
  console.log("Is every Number in the array higher than", eleFEvery());
  var yesEvery= 0;
  for(let i = 0; i< aVar.length; i++){
 
    if(eleFEvery() > aVar[i]){
      yesEvery =1;
      //return true;
      console.log(true);
    }
  }
  if(yesEvery === 0){
    // return false;
    console.log(false);
  }
}
myEvery(things, eleFEvery);




//6)MyForReduce
console.log("\nMyReduce");

function hakeemReducer(accumulator, current) {
  return accumulator * current;
}
//implmentation of ForReduce
function myReduce(array, reducer, startingIndex) {
  
  let total = startingIndex;
  for (let i = 0; i < array.length; i++) {
    total = reducer(total, array[i]);
  }
  return total;
}
console.log(myReduce(things, hakeemReducer, 10));










//7)MyForIncludes
console.log("\nMyIncludes");

//genralization test function
function isNumIncluded(check, arrayIndex){
return check === arrayIndex
}


//implmentation of Includes
function myIncludes(array, condiction, check){
  for(let i = 0; i< array.length; i++){
    if(isNumIncluded(check, array[i])){
      console.log(true);
    }else{
      console.log(false);
    }
  }

}
console.log(myIncludes(things, isNumIncluded, 100));



//8)MyPush
console.log("\nMyPush");

//implmentation of lastIndexOf
function myPush(array,newElement){
   array[array.length]= newElement;
  return array;
}
console.log(myPush(things, "working"));
console.log(myPush(things, "still working"));








//9)lastIndexOf
//var str= "Hello"
console.log("\nMylastIndexOf");

//genralization test function


//implmentation of lastIndexOf
function myLastIndexOf(input, checkIndexOf){
  var test;
  for(let i = input.length; i > 0; i--){
    if(input[i]=== checkIndexOf[0]){
      return i;
    }  
  }
}
console.log(myLastIndexOf( "hello, I like to say hello. my dog is a friend.", "hello"));


//10)Object.keys
console.log("\nObject.keys");

//genralization test function


//implmentation of Object.keys
var testArray= [1,2,'a', 'b', 3, true];
console.log(testArray);
var newTestArray= [];



function myObjKey(input, keyCondiction){
  for(let i = 0; i< input.length; i++){
    // newTestArray.push(Number.isInteger(input[i]));
    if(Number.isInteger(input[i])){
       newTestArray.push(input[i]= i)
      
    }
    
  }
  console.log(newTestArray);
}
console.log(myObjKey(testArray));

//Object.keys(things);
console.log("\nObject.values");

console.log(testArray);
//4)Object.values


//genralization test function
function myObjValue(input){
  var newTestArray2= []
  for(let i = 0; i< input.length; i++){
    // newTestArray.push(Number.isInteger(input[i]));
    if(!Number.isInteger(input[i])){
       newTestArray2.push(input[i]= i)
      
    }
    
  }
  console.log(newTestArray2);
}
console.log(myObjValue(testArray));
//implmentation of Object.values

