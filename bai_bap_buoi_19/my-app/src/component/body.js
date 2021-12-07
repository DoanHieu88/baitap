import {useState,useEffect} from 'react'

export default function Body() {
    const [count,setCount] = useState(0);
    const plus = () =>{
        setCount(count + 1 )
    }

    const [todoList,setTodoList] = useState([
        {id: 1, name: "task1", isDone: false},
        {id: 2, name: "task2", isDone: true}
    ])

    const addTask = () => {
        const newList = {
            id: todoList.length + 1,
            name: `task ${todoList.length+1}`
        }

        setTodoList([...todoList,newList])
    }

    const checkDone = (id) => {
        const newList = todoList.map(item =>{
            if(item.id === id){
               return {...item,isDone: !item.isDone}
            }
            return item
        })
        setTodoList(newList)

        console.log(newList);
    }

    
    return (
        <div>
            <p>count</p>
            <p>{count}</p>  
            <button onClick={plus}>plus 1</button>
            <ul>
                {todoList.map((item,index)=>{
                    return(
                        <li key={index} className={item.isDone  ? "textDecoration" : "list"} onClick={()=>{checkDone(item.id)}}>{item.name}</li>
                    )
                })}
            </ul>
            <button onClick={addTask}>Add task</button>
        </div>
    )
}
