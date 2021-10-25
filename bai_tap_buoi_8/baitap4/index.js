// in ra màn hình số lẻ và số chẵn từ 1 đến 10

// for (let i = 0; i <= 10; i++) {
//         if(i % 2 !== 0){
//             console.log(i);
//         }
// }


//in ra so nguyen to tu 1 den n
let n =100;
let bol =true;
for(let i = 2; i<=n; i++){
    for(let j = 2; j<i; j++ ){
       if(i%j === 0){
           bol = false;
           break;
       }else{
           bol = true;
       }
    }
    if(bol== true){
        console.log(i);
    }
}
