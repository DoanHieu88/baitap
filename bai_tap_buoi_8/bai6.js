//tính tổng bình phương các số từ 1 đén  n
// let n =3;
// let sum = 0;
// for(let i= 1;i<=n; i++){
//     sum = sum + i*i;
// }
// console.log(sum);

let sum = (n)=>{
    let count = 0;
    for(let i =1; i<=n; i++){
        count += i*i;
    }
    console.log(count);
}
sum(3);