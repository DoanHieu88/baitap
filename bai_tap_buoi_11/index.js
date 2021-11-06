// BÀi kiểm tra 
// 1.Show all student
// 2.Create student and return Menu
// 3.Delete student
// 4.Edit student
// 5.Find student by name
// 6.Sort student by name ascending 
// 7.Sort student by age ascending 
// 8.Exit

var readlineSync = require('readline-sync');
// var menu = readlineSync.question(showMenu());
// var nameStudent = readlineSync.keyIn();
// var ageStudent = readlineSync.keyIn();
var userChoose = "";

function showMenu(){
    console.log("       1.Show all student");
    console.log("       2.Create student and return Menu");
    console.log("       3.Delete student");
    console.log("       4.Edit student");
    console.log("       5.Find student by name");
    console.log("       6.Sort student by name ascending ");
    console.log("       7.Sort student by age ascending ");
    console.log("       8.Exit");
    userChoose = readlineSync.question('ENTER YOUR CHOOSE: ');
}
showMenu();

let students = [
    {
        id: 1,
        name: "Hieu",
        age: 10,
        gender: "male"
    },
    {
        id: 2,
        name: "Thang",
        age: 24,
        gender: "male"
    },
    {
        id: 3,
        name: "Giang",
        age: 30,
        gender: "male"
    },
]
while(userChoose < 8){
    switch (userChoose) {
        case "1":
            console.log(students);
            console.log("\n");
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
            break;
        case "5":
            findStudent();
            showMenu;
            break;
        case "6":
            sortByName();
            break;
        case "7":
            sortByAge();
            break;

    }

}

// hàm thêm sinh viên
function creatStudent(){
    let last = students.length+1;

    let creat = {
        id : last++,
        name : readlineSync.question("Enter student name: "),
        age : readlineSync.question("Enter student age: "),
        gender : readlineSync.question("Enter student gender: (0):undefine; (1):male; (2): female ")
    }
        switch(creat.gender){
            case "0" : creat.gender = "undefine";
                break;
            
            case "1" : creat.gender = "male";
                break;
            
            case "2" : creat.gender = "female";
                break;
        }
    students.push(creat);

    console.log(students);
    console.log("\n");
}

// hàm xóa sinh viên 

function deleteStudent(){
    console.log(students);
    let deleteByName = readlineSync.question("Enter name student you want to delete: ");
    students.splice((item)=>{
        let indexName = item.name;
        indexName.indexOf(deleteByName);
        return item[indexName];
    },1)
    
    console.log(students);
    console.log("\n");
}

// hàm sửa sinh viên
function changeStudent(){
    let nameStudent = readlineSync.question("Enter name student: ");
    let indexStudent = students.filter((item)=> nameStudent == item.name);

    console.log(indexStudent);
    console.log("\n");
    
    students.filter((item)=>{
        let newName = readlineSync.question("Enter new name: ");
        let newAge = readlineSync.question("Enter new age: ");
        let newGender = readlineSync.question("Enter new gender: (0):undefine; (1):male; (2): female ");
        switch(newGender){
            case "0" : newGender = "undefine";
                break;
            
            case "1" : newGender = "male";
                break;
            
            case "2" : newGender = "female";
                break;
        }
        item.name = newName;
        item.age =  newAge;
        item.gender = newGender;
        console.log(students);
    })
    console.log(showMenu());
}   

// hàm tìm kiếm sinh viên bằng tên 
function findStudent(){
    let nameStudent = readlineSync.question("Enter name student: ");
    let indexStudent = students.filter((item)=> {
        item.name.toLowerCase();
        if(nameStudent === item.name){
            return item.name == nameStudent
        }else{
            console.log('  Can not find Student')
        }
    });

    console.log(indexStudent);
    console.log("\n");
    showMenu();
}


// hàm sắp xếp theo tên 

function sortByName(){
    students.sort((a,b)=>a.name.localeCompare(b.name));
    console.log(students);
    console.log(showMenu());
}

// sắp xếp theo tuổi

function sortByAge(){
    students.sort((a,b)=>a.age-b.age)
    console.log(students);
    console.log(showMenu());
}