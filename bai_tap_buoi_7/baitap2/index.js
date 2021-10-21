// kiem tra co phai so nguyen to khong ?
let bol = true;
let check = (n) =>{
    if(n < 2){
        bol = false;
    }else{
        for(let i = 2; i < (n-1); i++){
            if(n % i != 0){
                bol = true;
            }else{
                bol = false;
            }
        }
    }
    if(bol == true){
        console.log('day la so nguyen to');
    }else{
        console.log('day khong phai la so nguyen to');
    }
}
check(2);