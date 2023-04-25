// Heating/Cooling
{
let actualTemp = prompt("What is the current temp (F)")
console.log (actualTemp);

const desiredTemp = 70;

if(actualTemp<desiredTemp) {
console.log ("Run Heat")
} else if(actualTemp==desiredTemp) {
console.log ("Standby")
} else if(actualTemp>desiredTemp) { 
console.log ("Run A/C")
}
}
// Extended Challenge
{
let tempCelsius = prompt("What temperature is it?")
let targetUnit = prompt("Is this K/C/or F?")

switch(targetUnit) {
    case "c" : 
    console.log (tempCelsius);
    break;
    case "f" :
    console.log ((tempCelsius-32) / 1.8); 
    break;
    case "k" :
    console.log (tempCelsius-273.15);
    break;
}
}