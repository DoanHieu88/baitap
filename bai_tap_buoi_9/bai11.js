// đếm có bao nhiêu khoẳng trắng trong 1 chuỗi
let count = 0;
let check = (str) => {
    for(let i =0; i<str.length;i++){
        if(str[i] == " "){
            count++;
        }
        
    }
    console.log(count)

}

check("helloword")