const rapid = (myString) => {
    let consonants = [];
    for(let position in myString){
        var character = myString[position]
        var isVowel = ['a','e','i','o','u'].includes(character.toLowerCase())
        if (!isVowel) {
            consonants.push(character)
        }
    }
    return consonants.join('').toUpperCase();
}
// From this line up Do not change code below
let str = "JOHN";
console.log(rapid(str));