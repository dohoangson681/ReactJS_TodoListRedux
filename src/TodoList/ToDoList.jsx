import React, { Component } from 'react' ; 
import { ThemeProvider } from 'styled-components';
import {ContainerTodoList} from '../ComponentsTodoList/Container' ; 
import { LightTheme } from '../Theme/TodoListLightTheme/LightThemeTodo';
import { DefaultTheme } from '../Theme/TodoListDefaultTheme/DefaultTheme';
import { DarkTheme } from '../Theme/TodoListDarkTheme/DarkTheme';
import { SelectTodoList } from '../ComponentsTodoList/SelectTodoList';
import {Heading1TdStyle , Heading2TdStyle , Heading3TdStyle , Heading4TdStyle} from '../ComponentsTodoList/HeadingsTodoList' ; 
import { InputTodoList } from '../ComponentsTodoList/InputTodoList';
import { BtnStyle } from '../ComponentsTodoList/ButtonTodoList';
import { TbTodoList } from '../ComponentsTodoList/TableTodoList';
import { connect } from 'react-redux';
class ToDoList extends Component {
    state = {
        currentTheme : DefaultTheme     
    }
    changeTheme = (event) => {
        let eleValue = event.target.value ; 
        if(eleValue === '1'){
            this.setState({
                currentTheme : DefaultTheme 
            })
        }else if(eleValue === '2'){
            this.setState({
                currentTheme : DarkTheme
            })
        }else{
            this.setState({
                currentTheme : LightTheme 
            })
        }
    }
    handleChangeInput = (event) => {
        let ele  = event.target ; 
        console.log(ele.value) ; 
        this.props.handleChangeInput(ele.value) ; 
    }
  render() {
    // console.log(this.props) ; 
    console.log('load') ; 
    return (
        <ThemeProvider theme={this.state.currentTheme}>
            <ContainerTodoList>
                {/* select field  */}
                <SelectTodoList onChange={(event)=>{
                    this.changeTheme(event) ; 
                }}>
                    <option value="1">Default Theme</option>
                    <option value="2">Dark Theme</option>
                    <option value="3">Light Theme</option>
                </SelectTodoList>
                {/* heading field  */}
                <Heading1TdStyle>To Do List</Heading1TdStyle>
                {/* input field  */}
                <InputTodoList>
                <p>Task Name</p>
                <input className='w-50' type="text" onChange={(event)=>{
                    this.handleChangeInput(event);  
                }} value = {this.props.TodoListReducer.taskNameInput} />
                <BtnStyle onClick={()=>{
                    // add task
                    this.props.addTask(this.props.TodoListReducer.taskNameInput) ; 
                    // clear input
                    this.props.clearInput() ;

                }} className='mx-1'>
                    <i className="fa-solid fa-plus mr-1"></i>
                    Add Task
                    </BtnStyle>
                    {/* UPDATE TAKS  */}
                <BtnStyle onClick={()=>{
                   let idUpdate = this.props.TodoListReducer.idUpdate ; 
                //    console.log("idUpdate" ,idUpdate) ; 
                    this.props.updateTask(idUpdate) ; 
                    // clear input
                    this.props.clearInput() ;
                }} className='mx-1'>
                <i className="fa-solid fa-pen-nib mr-1"></i>
                    Update Task
                    </BtnStyle>
                </InputTodoList>
                {/* table to do list  */}
                <div>
                    <Heading4TdStyle>Task to do</Heading4TdStyle>
                    <TbTodoList className="table">
                        <tbody>
                            {this.props.TodoListReducer.taskTodo.map((taskTD)=>{
                                return (
                                    <tr key={`${taskTD.name}1651`}>
                                    <th className='d-flex justify-content-between'>
                                        <span className='d-inline-block'>{taskTD.name}</span>
                                        <div>
                                            {/* xoa task  */}
                                            <BtnStyle onClick={()=>{
                                                this.props.deleteTask(taskTD.id) ; 
                                            }} className='mx-1' >
                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                            </BtnStyle>  
                                            {/* xem chi tiet task  */}
                                            <BtnStyle onClick={()=>{
                                                this.props.detaileTask(taskTD) ; 
                                            }} className='mx-1' >
                                            <i className="fa-solid fa-pen-to-square"></i>
                                            </BtnStyle>
                                            {/* check task  */}
                                            <BtnStyle onClick={()=>{
                                                this.props.checkTask(taskTD.id) ; 
                                            }} className='mx-1' >
                                            <i className="fa-solid fa-check"></i>
                                            </BtnStyle>
                                        </div>
                                    </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </TbTodoList>
                </div>
                {/* table complete task  */}
                <div>
                    <Heading4TdStyle>Task completed</Heading4TdStyle>
                    <TbTodoList className="table">
                        <tbody>
                        {this.props.TodoListReducer.taskComplete.map((taskCP)=>{
                                return (
                                    <tr key={`${taskCP.name}`}>
                                    <th className='d-flex justify-content-between'>
                                        <span className='d-inline-block'>{taskCP.name}</span>
                                        <div>
                                            <BtnStyle className='mx-1' >
                                            <i className="fa-sharp fa-solid fa-trash"></i>
                                            </BtnStyle> 
                                        </div>
                                    </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </TbTodoList>
                </div>
            </ContainerTodoList>
        </ThemeProvider>
      
    )
  }
}
const mapStateToProps = (rootReducer) => {
    return {
        TodoListReducer : rootReducer.TodoListReducer ,
    }
} 
const mapDispatchToProps = (sendStrReq) => {
    return {
        handleChangeInput : (value) => {
            sendStrReq({
                type :"HANDLE_CHANGE_INPUT" ,
                value
            })
        } , 
        addTask : (taskName) => {
            sendStrReq({
                type :"ADD_TASK" ,
                taskName
            })
        } ,
        clearInput : () => {
            sendStrReq({
                type :"CLEAR_INPUT" 
            })
        },
        deleteTask : (id) => {
            sendStrReq({
                type :"DELETE_TASK",
                id 
            })
        },
        detaileTask : (taskTD) => {
            sendStrReq({
                type :"DETAIL_TASK",
                taskDetail : taskTD 
            })
        } , 
        updateTask : (idUpdate) => {
            sendStrReq({
                type :"UPDATE_TASK",
                idUpdate
            })
        },
        checkTask : (idCheck) => {
            sendStrReq({
                type : "CHECK_TASK" , 
                idCheck
            })
        }
    }
} 
export default connect(mapStateToProps , mapDispatchToProps)(ToDoList) ;
