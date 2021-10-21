    //phương trình bậc 2  ax^2 +bx + c = 0
let x1 = 0;
let x2 = 0;
let equation = (a,b,c) =>{
    delta = b*b -4*a*c;
    if(delta < 0){
        console.log('PT vo nghiem');
    }else if(delta == 0){
        x1 = x2 = -b/2*a; 
        console.log('Phuong trinh co nghiem kep la : ' + `${x1}`);
    }else {
        x1 = (-b + Math.sqrt(delta)) / 2*a;
        x2 = (-b - Math.sqrt(delta)) / 2*a;
        console.log('Phuong trinh co 2 nghiem phan biet la x1 =' + `${x1}` + ' va x2 =' + `${x2}`);
    }
} 
equation(2,4,2);
