// Viết chương trình chuẩn hóa họ tên.

let replaceName = (myName)=>{
    myName = myName.toLowerCase();
    // console.log(myName);
    for(let i =0; i<myName.length; i++){
        if(i == 0 || myName.charAt(i -1) == " " ){
            myName = myName.slice(0,i) + myName[i].toUpperCase() + myName.slice(i + 1);
        }
    }
    console.log(myName)
} 
replaceName("ngUyEn dOAn hiEu");

