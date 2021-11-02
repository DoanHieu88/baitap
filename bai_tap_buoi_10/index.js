// Ktra chuỗi có đối xứng k 
// function isSymmetrical(str){
//     let convertArr = str.split("");
//     let reverseArr = convertArr.reverse();
//     let convertStr = reverseArr.join("");
//     if(convertStr === str){
//         return true;
//     }return false;

// }


// console.log(isSymmetrical("1234341"));

//tìm số xuất hiện nhiều nhất

// function findNumber(arr){
//     let sortArr = arr.sort();
//     let arrA =[];
//     let arrB = [];
//     let flag;

//     for(let i =0; i<sortArr.length; i++){
//         if(sortArr[i] !== flag){
//             arrA.push(sortArr[i]);
//             arrB.push(1);

//         }else{
//             arrB[arrB.length-1]++;
//         }
//         flag = sortArr[i];
//     }
//     let maxArr =  Math.max(...arrB);
//     let indexMax = arrB.indexOf(maxArr);
//     let numberFrequency = arrA[indexMax];
//     console.log(indexMax);
//     console.log(arrA);
//     console.log(arrB);
//     console.log(maxArr);
//     console.log(sortArr);
//     console.log('so xuat hien nhieu nhat la : ', numberFrequency);

// }   
// findNumber([1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1]);

// Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)

const a = [1,2,3,2,3,4,6,7];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num ;
  }
  
  console.log(a.filter(isPrime));
