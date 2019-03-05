// Your code here
function firstEvens(arr){
    let result = [];
    for(let i = 0;i<arr.length;i++){
        if(result.length < 2){
            if(arr[i] % 2 === 0){
                result.push(arr[i]);
            }
        }
    }

    if(result.length === 2){
        return result;
    }

    return -1;
}



// do not change code below this comment
module.exports = firstEvens;