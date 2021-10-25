//tổng các số lẻ từ 1 đến n
let n= 5;
let sum =0;
for(let i= 1; i<=n; i++){
    if(i%2 !== 0){
        sum +=i;
    }
}
console.log(sum);

