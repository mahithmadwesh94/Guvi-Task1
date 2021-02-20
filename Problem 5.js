var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
 var newObject = {};
 for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr[i].length;j++){
         newObject[arr[i][j]] = arr[i][j+1];
         break;
     }
 }
 return newObject;
}

console.log(fromListToObject(arr));