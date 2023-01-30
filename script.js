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



let arr = [];
for (let i = 0; i < 1000; i++) {
    arr.push(i * i);
}
console.log(arr);


for (let index = 0; index < 100; index++) {
    
    console.log("index");
    
}

let item = [];
while (item < 50) {
    console.log("index");
    item++;
}


do {
    console.log("index");
    item++;
} while (item < 150 );