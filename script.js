let nameArray = ["Nina" , "Nika" , "Mashka",  "Anka" , "Deme"];

let arrayLength = nameArray.length; 
console.log(arrayLength);

if (arrayLength === 0) {
    console.log("array length is 0");
}else {
    let addArray = [...nameArray];
    nameArray.unshift("Vachi");
    addArray.push("Dachi");
}

nameArray.pop();
nameArray.shift();
console.log(nameArray , nameArray.lenght);


