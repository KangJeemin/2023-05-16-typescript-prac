function exampleOne(object:object){
  let value :Array<string> = [];
  for(let key in object) {
    value.push(key);
  }
  return value;
}

let test = {
  name:"kongukjae",
  age:20,
  job:"minam"
}


console.log(exampleOne(test))