let btnAdd = document.querySelector("#add");
let inputUser = document.querySelector("#todo"); 
let todoList = document.querySelector(".tasks");
let pendingTask = document.querySelector(".pendding");
let footer = document.querySelector(".show-all-tasks");
let btnClearAll = document.querySelector(".btn-clear")


inputUser.onkeyup = ()=>{
    let valueInput = inputUser.value; // lấy giá trị người dùng nhập

    if(valueInput.trim() !== 0){  // nếu giá trị có rỗng
        btnAdd.classList.add("active");
    }else{
        btnAdd.classList.remove("active")
    }
}

btnAdd.onclick = ()=>{
    let getLocalStorage = localStorage.getItem("New todo"); // lấy data từ localstorage
    let valueInput = inputUser.value; // lấy giá trị người dùng nhập

    if(getLocalStorage == null){ // nếu k có dữ liệu trên localstorage
        listTodo = [];      // gán cho list 1 mảng rỗng
    }else{
        listTodo = JSON.parse(getLocalStorage); // gán giá trị cho mảng sau khi chuyển về dạng js object
    }
    listTodo.push(valueInput);
    localStorage.setItem("New todo", JSON.stringify(listTodo));
    showTask();
    displayFooter();
}

function showTask(){
    let getLocalStorage = localStorage.getItem("New todo"); // lấy data từ localstorage
    if(getLocalStorage == null){ // nếu k có dữ liệu trên localstorage
        listTodo = [];      // gán cho list 1 mảng rỗng
    }else{
        listTodo = JSON.parse(getLocalStorage); // gán giá trị cho mảng sau khi chuyển về dạng js object
    }

    let newList = ""; 
    listTodo.forEach((element,index) => { // chạy qua từng phần tử để lấy element của nó
        // hiển thị element sang html
        newList += ` <li class="task"> 
                        <p class="h6">${element}</p>
                        <button class="btn btn-danger" onclick = deleteTodo(${index})>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </button>    
                    </li>`
    });
    todoList.innerHTML = newList;
    inputUser.value = "";
    btnAdd.classList.remove("active")

}
showTask();// gọi lại hàm hiển thị list todo

function displayFooter(){
    let getLocalStorage = localStorage.getItem("New todo"); // lấy data từ localstorage
    if(getLocalStorage == null){ // nếu k có dữ liệu trên localstorage
        listTodo = [];      // gán cho list 1 mảng rỗng
    }else{
        listTodo = JSON.parse(getLocalStorage); // gán giá trị cho mảng sau khi chuyển về dạng js object
    }

        // đếm số pendding để hiển thị ra html
        pendingTask.innerHTML = listTodo.length ;

        if(listTodo.length === 0){
            footer.style.display = "none";
        }else{
            footer.style.display = "flex"
        }
}
displayFooter();

// hàm xóa phàn 1 subject
function deleteTodo(index){
    let getLocalStorage = localStorage.getItem("New todo"); // lấy data từ localstorage
    let listTodo = JSON.parse(getLocalStorage); // gán giá trị cho mảng sau khi chuyển về dạng js object

    // delete phần tử ở vị trí index
    listTodo.splice(index,1);
    localStorage.setItem("New todo", JSON.stringify(listTodo));
    displayFooter();
    showTask();
}

// hàm xóa tất cả list
btnClearAll.onclick = ()=>{
    let getLocalStorage = localStorage.getItem("New todo"); // lấy data từ localstorage
    let listTodo = JSON.parse(getLocalStorage); // gán giá trị cho mảng sau khi chuyển về dạng js object
    listTodo = []; // gán list thành mảng rỗng
    localStorage.setItem("New todo", JSON.stringify(listTodo));// gán Item trên localstorage = listtodo
    showTask();
}