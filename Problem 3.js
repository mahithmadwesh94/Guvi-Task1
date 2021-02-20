var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 
    let outputArray = [];

    for(let i in obj){
        let subArray = [];
        subArray.push(i);
        subArray.push(obj[i]);
        outputArray.push(subArray);
    }

    console.log(outputArray);
    return outputArray;
}


convertListToObject(obj);