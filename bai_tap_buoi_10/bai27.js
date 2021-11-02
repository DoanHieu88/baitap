// 27. Cho một mảng là một tập hợp các học viên trong lớp REACTJS, mảng là một tập hợp object của học viên gồm 3 thông tin: id, firstName, lastName, và age. Hãy đưa tên và họ về chuẩn tên với ký tự đầu tiên của tên Viết Hoa và tìm tất cả học viên có tên tồn tại chữ cái “a” hoặc “A” và tên dài hơn hoặc bằng 3 ký tự.

//hàm chuẩn hóa hóa
let standardized = (str)=>{
    str.lowerCase();
    for(let i =0; i<str.length; i++){
        if(i == 0 || str[i - 1] == " "){
           str =  str.slice(i-1) + str[i].upperCase() + str.slice(i+1);
        }
    }
} 

//xử lí
let b = [];
let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]

students[i].firstName = standardized(students[i].firstName);
console.log(b);
console.log(students);