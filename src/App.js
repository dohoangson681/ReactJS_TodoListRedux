
import './App.css';
import DemoPure from './DemoPureComponent/DemoPure';
import DemoJSS from './JSS/DemoJSS/DemoJSS';
import LifeCycleReact from './LifeCycle/LifeCycleReact';
import  DemoTheme  from './Theme/DemoTheme/DemoTheme';
import ToDoList from './TodoList/ToDoList';


function App() {
  
  return (
    <div className="App">
      {/* <DemoPure/> */}
      {/* <DemoJSS/> */}
      {/* <DemoTheme/> */}
      <ToDoList/>
      {/* <LifeCycleReact/> */}
    </div>
  );
}

export default App;
