var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
function transformEmployeeData(arr) {
 var tranformEmployeeList = [];
 
 for(let i=0;i<arr.length;i++){
     let tempObj = {};
     for(let j=0;j<arr[i].length;j++){
         for(let k=0;k<arr[i][j].length;k++){
             tempObj[arr[i][j][k]] = arr[i][j][k+1];
             break;
         }
     }
     tranformEmployeeList.push(tempObj);
 }
 
 return tranformEmployeeList;
}

console.log(transformEmployeeData(arr));