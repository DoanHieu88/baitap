var readlineSync = require('readline-sync');
var fs = require('fs');
let userChoose = readlineSync.question("Your choose: ");
// đọc dữ liệu từ file data
let readData = fs.readFileSync("./data.txt","utf-8");

//convert dữ liệu từ file data sang string
let convertData = JSON.stringify(readData);

//convert file data sang kiểu js
console.log(JSON.parse(convertData));

//hàm lưu file 
function saveFile(){
    
}

// hàm hiện thị lựa chọn
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


while(userChoose < 8){
    switch (userChoose) {
        case "1":
            console.log(convertData);
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
    let last = readData.length+1;

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
    .push(creat);

    console.log(students);
    console.log("\n");
}   