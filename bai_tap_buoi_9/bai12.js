//Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi

let remove = (str)=>{
    str = str.replaceAll(" ", "");
    console.log(str.length);
}

remove("A lo   ");
