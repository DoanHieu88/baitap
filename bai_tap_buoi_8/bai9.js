//Kiểm tra n có phải là số đối xứng
// cách 1
// let n = 1235321;
// let x = n.toString();
// let bol = true;
// let i = 0;
// let j ;

// for(i; i<x.length/2-1;i++){
//     // console.log(i);
//     for(j = x.length-1; j>x.length/2; j--){
//         console.log(j);
//     }
// }


//dùng hàm
let checkSymmetrica =(n)=>{
    bol= true;
    let x = n.toString();
    if(x.length %2 == 0){
       bol = false;
    }else{
        for(let i = 0;i<x.length/2-1; i++ ){
            if(x[i] != x[x.length -i -1]){
               bol =false;
            }else{
                bol = true;
            }
        }
        if(bol == true){
            console.log('Yes');
        }else{
            console.log('no');
        }
    }  
}
checkSymmetrica(123676321);
