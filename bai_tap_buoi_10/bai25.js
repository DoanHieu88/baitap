// 25. Cho một mảng là một tập các số nguyên dương, hãy tạo một mảng b là tập hợp bình phương của các số trong mảng a
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[1,4,9,4,9,16,36,49]

let a = [1,2,3,2,3,4,6,7];
let square = (arr) =>{
    let b=[];
    for(let i =0; i<arr.length; i++){
        let element = arr[i];
        b.push(element*element);
    }
    console.log(a,b);
}
square(a);