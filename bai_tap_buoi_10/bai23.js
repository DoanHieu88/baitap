//23. Cho một mảng là một tập các số nguyên, tìm số có tần suất xuất hiện nhiều nhất?
// VD: a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] .Output: 3

function findNumber(arr){
    let sortArr = arr.sort();
    let arrA =[];
    let arrB = [];
    let flag;

    for(let i =0; i<sortArr.length; i++){
        if(sortArr[i] !== flag){
            arrA.push(sortArr[i]);
            arrB.push(1);

        }else{
            arrB[arrB.length-1]++;
        }
        flag = sortArr[i];
    }
    let maxArr =  Math.max(...arrB);
    let indexMax = arrB.indexOf(maxArr);
    let numberFrequency = arrA[indexMax];
    console.log(indexMax);
    console.log(arrA);
    console.log(arrB);
    console.log(maxArr);
    console.log(sortArr);
    console.log('so xuat hien nhieu nhat la : ', numberFrequency);

}   
findNumber([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]);