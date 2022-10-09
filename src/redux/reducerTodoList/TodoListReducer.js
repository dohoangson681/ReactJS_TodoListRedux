let stt = 0
const stateDefault = {
    taskTodo : [
        {
            name : "Sleep" ,
            id : stt++ 
        },
        {
            name : "Piss",
            id : stt++
        },
        {
            name : "Shit",
            id : stt++ 
        }
    ] , 
    taskComplete : [
        
    ] , 
    taskNameInput : "" ,
    idUpdate : 0
}
export const TodoListReducer = (state = stateDefault , action) => {
    // return state ; 
    // return {...state} ; 
    switch (action.type) {
        case 'HANDLE_CHANGE_INPUT' :
            {
                let stateUpdate = {...state , taskNameInput : action.value}
                console.log('stateUpdate' , stateUpdate) ;
                state = stateUpdate ;  
            }
            return {...state} ;
        case 'ADD_TASK' :
            {
                let newTask = {
                    name : action.taskName ,
                    id : stt++  
                    
                }
                let taskTodoUpdate = [...state.taskTodo ,newTask ] ;
                console.log('taskTodoUpdate' , taskTodoUpdate) ; 
                state = {...state , taskTodo : taskTodoUpdate};

            }
            return {...state} ;
        case 'CLEAR_INPUT' :
            {
                let stateUpdate = {...state , taskNameInput : ""}
                state = stateUpdate ;   
            }
            return {...state} ; 
        case 'DELETE_TASK' :
            {
                let index = state.taskTodo.findIndex((task)=>{
                    return task.id === action.id
                })
                let taskTodoUpdate = [...state.taskTodo] ; 
                if(index > -1){
                    taskTodoUpdate.splice(index , 1) ; 
                    state = {...state , taskTodo : taskTodoUpdate} ; 
                }else alert("St Wrong !") ;  
                
                
            }
            return {...state}
        case 'DETAIL_TASK' :
            {
                console.log(action) ; 
                let id= action.taskDetail.id ;
                console.log("id update" , id) ; 
                let stateUpdate = {...state , taskNameInput : action.taskDetail.name , idUpdate : id }
                state = stateUpdate ; 
            }
            return {...state} ;
        case 'UPDATE_TASK' :
            {
                let index = state.taskTodo.findIndex((task)=>{
                    return task.id === action.idUpdate ; 
                })
                let stateUpdate = {...state} ;
                if(index  > -1) {
                    stateUpdate.taskTodo[index].name = state.taskNameInput ; 
                    console.log(stateUpdate) ; 
                    state = stateUpdate ; 
                }else  {
                    alert('not found !') ; 
                }
            }
            return {...state} ;     
        case 'CHECK_TASK':
            {
                console.log(action) ; 
                let indexFind = state.taskTodo.findIndex((task)=>{
                    return task.id === action.idCheck ; 
                })
                let stateUpdate = {...state} ;
                if(indexFind > -1){
                    let newTaskCP = {
                        name : stateUpdate.taskTodo[indexFind].name , 
                        id : stateUpdate.taskTodo[indexFind].id
                    }
                    stateUpdate.taskTodo.splice(indexFind , 1) ; 
                    
                    stateUpdate.taskComplete.push(newTaskCP) ;
                    state = stateUpdate ; 
                }else {
                    alert("Wrong !"); 
                }
            }
            return {...state} ;    
            default:
            return state ;
    }
}