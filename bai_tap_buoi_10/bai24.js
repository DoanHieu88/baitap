// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]

const a = [1,2,3,2,3,4,6,7];

let isPrime = (num)=>{
    for (let i = 2; num > i; i++) {
        if(num % i == 0){
            return false;
        }
    }
    return num >1;
}
console.log(a.filter(isPrime))



