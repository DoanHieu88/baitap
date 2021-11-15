var readlineSync = require('readline-sync');
var fs = require('fs');
const shortid = require('shortid');


// đọc file data
let studentFile = fs.readFileSync("./data.txt","utf-8");

//hàm lưu file 
function saveFile(){
    //lưu vào data dưới dạng string
   let studentStr = JSON.stringify(students);
    fs.writeFileSync("./data.txt",studentStr,"utf-8")
}

// chuyển dữ liệu của file data từ string => JSON    
let students = JSON.parse(studentFile);

// mảng giới tính
let genders = ["male", "female", "undefine"];

// hàm hiện thị lựa chọn
function showMenu(){
    console.log("       1.Show all student");
    console.log("       2.Create student and return Menu");
    console.log("       3.Delete student");
    console.log("       4.Edit student");
    console.log("       5.Find student by name");
    console.log("       6.Sort student by name ascending ");
    console.log("       7.Sort student by age ascending ");
    console.log("       8.Delete All students");
    console.log("       9.Sum all age students");
    console.log("       10.Exit");
    userChoose = readlineSync.question('ENTER YOUR CHOOSE: ');
}
showMenu();

while(userChoose < 10){
    switch (userChoose) {
        case "1":
            console.log(students)
            showMenu();
            break;
        case "2":
            creatStudent();
            showMenu();
            break;
        case "3":
            
            deleteStudent();
            showMenu();
            break;
        case "4":
            changeStudent();
            showMenu();
            break;
        case "5":
            findStudent();
            showMenu();
            break;
        case "6":
            sortByName();
            break;
        case "7":
            sortByAge();
            break;
        case "8":
            delAll();
            break;
        case "9":
            sumAllAge();
            break;
    }

}
if(userChoose > 10){
    console.log("        Please enter number from 1-10");
    console.log("\n");
    showMenu();
}


// hàm thêm sinh viên
function creatStudent(){
    let name = readlineSync.question("Enter student name: ");
    let age =  parseInt( readlineSync.question("Enter student age: "));
    let genderInput =  readlineSync.keyInSelect(genders, "Enter student gender: (0):undefine; (1):male; (2): female ");
    students.push( {
        id : shortid.generate(),
        name : name,
        age : age,
        gender : genders[genderInput]
    });
    
    saveFile();
    console.log(students);
} 

// hàm xóa sinh viên 
function deleteStudent(){
    let nameDel = readlineSync.question("Enter your name you want delete: ");

    // cách 1 
    // let newStudents = students.filter((item)=>{
    //     return item.name !== nameDel;
    // })
    // students = newStudents;
   
    // cách 2 
    let indexNameDel = students.findIndex((item)=>{
        return item.name === nameDel;
    })
    students.splice(indexNameDel,1);

    saveFile();
    console.log(students);
}


// hàm sửa sinh viên
function changeStudent(){
    let nameChange = readlineSync.question("Enter your name you want change: ");
    let indexNameChange = students.findIndex((item)=>{
        return item.name === nameChange;
    })
    console.log(students[indexNameChange]);

    let ageEdit = readlineSync.question("New age? ");
    let gender = readlineSync.keyInSelect(genders,"Enter student gender: " );

    students[indexNameChange].age = parseInt(ageEdit);
    students[indexNameChange].gender = genders[gender];

    saveFile();
    console.log(students);
};

//tìm kiếm bằng tên 
function findStudent(){
    let nameFind = readlineSync.question("Enter name student ");
    students = students.filter((item)=>{
        item.name.toLowerCase();
        return item.name === nameFind;
    });
    console.log(students);
}

// hàm sắp xếp theo tên 
function sortByName(){
    // cách 1 
    // students.sort((a,b)=>{
    //    if(a.name < b.name){
    //        return -1;
    //    }return 1;

    // })

    // cách 2
        students.sort((a,b)=>{
           return a.name.localeCompare(b.name);
        })
    console.log(students);
    showMenu();
}

//sắp xếp theo tuổi
function sortByAge(){
    students.sort((a,b)=>{
        return a.age - b.age;
    })
    console.log(students);
    showMenu();
}

// xóa tất cả sinh viên trong file 
function delAll(){
    if(readlineSync.keyInYN("You sure want to delete all student?")){
        students = [];
    }else{
        console.log(students);
    }

    saveFile();
    console.log("\n")
    showMenu();
}

// tính tổng số tuổi của tất cả học sinh
function sumAllAge(){
    let sumAge = students.reduce((a,b)=>{
        return a = a + b.age;
    },0)
    console.log("Sum all student is : ", sumAge);
    showMenu();
}