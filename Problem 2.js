var obj = {name : 'RajiniKanth', age : 25, hasPets : true};

function printAllKeys(obj) {
let outputArray = [];


for(let i in obj){
    outputArray.push(i);
}

return outputArray;
}

console.log(printAllKeys(obj));