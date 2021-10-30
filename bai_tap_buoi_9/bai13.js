// Hãy viết chương trình đảo ngược sau s

let reverse = (str) =>{
    let reverseString = ""
    for(i = str.length -1 ; i>=0 ; i--){
        reverseString += str[i];
    }
    console.log(reverseString);
}   

reverse("Toi la Doan Hieu");