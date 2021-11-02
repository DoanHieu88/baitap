// 22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5

let  a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
// số lớn nhất
   let max = Math.max(...a);
   console.log(max);
//số bé nhất
    let min = Math.min(...a);
    console.log(min);

// số trung bình

let averageNumber = (max+min)/2;
console.log(averageNumber); 


