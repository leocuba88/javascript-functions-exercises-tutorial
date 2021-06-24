var dollarToEuro = function(dollarValue){ //me devuelve el valor en Euros
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){ //me devuelve el valor en Yen
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

var dollarValue = 137;
var euroValue = dollarToEuro(dollarValue);

//console.log(dollarToEuro() * euroToYen());
var result = euroToYen(euroValue);
console.log(result)

