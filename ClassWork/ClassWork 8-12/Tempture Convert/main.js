var currTempCel = prompt("What is the Tempture in Celsius?");
var currTempFahr = prompt("What is the Tempture in Fahrenheit?");


function celsiusToFahrenheit(aVar){

  var fahrenheitTemp = currTempCel * (9 / 5)+ 32;
  console.log(currTempCel ," Degrees Celsius is equal to ", fahrenheitTemp, " Degrees Fahrenheit." );
  return currTempCel;
}

function fahrenheitToCelsius(aVar){
  var celsiusTemp = (currTempFahr - 32 ) * 5/9;
  console.log(currTempFahr ," Degrees Fahrenheit is equal to ", celsiusTemp, " Degrees Celsius." );
  return currTempFahr;
}
celsiusToFahrenheit("currTempCel");
fahrenheitToCelsius("currTempFahr");
