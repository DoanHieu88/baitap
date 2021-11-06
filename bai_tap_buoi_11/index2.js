var readlineSync = require('readline-sync');

var nameStudent = readlineSync.keyIn(students.name);
var ageStudent = readlineSync.keyIn();

let students = [
    {
        name : "Nguyen Doan Hieu",
        age : 10
    },
    {
        name : "Nguyen Doan Thang",
        age : 24
    },
    {
        name : "Dao Quynh Giang",
        age : 30
    }
]


function creatStudent(){
    students.name = nameStudent;
    students.age = ageStudent;

    return students;
}