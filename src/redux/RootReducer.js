import { combineReducers } from "redux";
import { createStore } from "redux";
import { TodoListReducer } from "./reducerTodoList/TodoListReducer";
const RootReducer = combineReducers({
    TodoListReducer
}) ; 
export const store = createStore(RootReducer) ; 