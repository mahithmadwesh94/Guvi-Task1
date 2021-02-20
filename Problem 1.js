var obj = {name : "RajiniKanth", age : 33, hasPets : false};

function printAllValues(obj) {
let outputArray = [];

for(let i in obj){
    outputArray.push(obj[i]);
}
console.log(outputArray);
return outputArray;
}

printAllValues(obj);