
function convert(){
let enteredTemp = document.getElementById("enterTemp").value;
const showResult = document.getElementById("showResult");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelsius = document.getElementById("toCelsius");
let temp;

if(toFahrenheit.checked){

temp = Number(enteredTemp);
temp = temp * 9 / 5 +32;
showResult.innerHTML = `${temp}°F`

} else if(toCelsius.checked){

temp = Number(enteredTemp);
temp = (temp - 32) * 5 / 9;
showResult.innerHTML = `${temp}°C`
}}
