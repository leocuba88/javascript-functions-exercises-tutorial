// Your code goes here:

function renderPerson() {
    var name = "Bob";
    var age = 23;
    var birth = "05/22/83";
    var eyes = "green";
    var sex = "male";
    var person = name.concat(" is a ", 23," years old ", sex, " born in ", birth, " with ", eyes);
    return person;
}

  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));