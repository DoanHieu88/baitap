//Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n 

let prime = (n) =>{
    let bol = true;
      for(let i= 2; i <= n; i++){
           for(let j=2; j<i; j++){
               if(i%j ==0){
                   bol =false;
                   break;
               }else{
                   bol= true;
               }
           }
           if(bol == true){
               console.log(i);
           }
      }
}

prime(100);

// let n =10;
// let bol = true;

// for(let i = 2; i<=n; i++){
//    for(let j = 2; j<i; j++){
//        if(i%j == 0){
//            bol = false;
//            break;
//        }else{
//            bol=true;
//        }
//    }
//     if(bol== true){
//         console.log(i);
//     }
// }
