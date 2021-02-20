var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 

    let temp1 = JSON.stringify(actual);
    let temp2 = JSON.stringify(expected);

    if(temp1 === temp2){
        return 'Passed';
    }else{
        return 'FAILED "'+testName+'" Expected '+JSON.stringify(expected)+' but got '+JSON.stringify(actual);
    }
}

console.log(assertObjectsEqual(actual,expected,'Testing'));