//Viết chương trình lấy  id name của fb.

let idName = (urlFace)=>{
    let myArray = urlFace.split("/");
    console.log(myArray[myArray.length -1 ])
}   

idName("https://www.facebook.com/ngothucdat");