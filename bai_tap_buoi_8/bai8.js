// kiểm tra có toàn là số lẻ k ?

// cách 1
// let n = 313131390;
// let x = n.toString();
// bol = true
// for(let i= 0; i< x.length; i++){
//     if(x[i] % 2 ==0){
//         bol = false;
//     }else{
//         bol = true;
//     }

//     if(bol == false){
//         console.log('no');
//         break;
//     }
// }

// if(bol == true){
//     console.log('yes');
// }


// cách 2;
let checkOddNumber = (n)=>{
    bol = true;
    let x = n.toString();
    for(let i = 0; i<x.length; i++){
        if(x[i] % 2 ==0){
           bol =false;
           break;
        }else{
            bol = true;
        }
    }
    if(bol == true){
        console.log('yes')
    }else{
        console.log('no');
    }
}
checkOddNumber(13431313);


