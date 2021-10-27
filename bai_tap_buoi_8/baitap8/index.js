// kiểm tra có toàn là số lẻ k ?

let n = 313131390;
let x = n.toString();
bol = true
for(let i= 0; i< x.length; i++){
    if(x[i] % 2 ==0){
        bol = false;
    }else{
        bol = true;
    }

    if(bol == false){
        console.log('no');
        break;
    }
}

if(bol == true){
    console.log('yes');
}
// console.log(typeof(x))


