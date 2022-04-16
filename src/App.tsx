import "./App.css";
import { useState } from "react";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [selectedProcess, setSelectedProcess] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setSelectedProcess(value);
  };

  const addTask = (): void => {
    const newTask: ITask = {
      taskName: task,
      process: selectedProcess,
    };
    setTodoList([...todoList, newTask]);
    setTask("");

  };

  const deleteTask = (taskNameToDelete: string): void => {
    const newTodoList = todoList.filter(
      (task: ITask) => task.taskName !== taskNameToDelete
    );
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            onChange={handleChange}
            type="text"
            value={task}
            placeholder="Task..."
          />
          <select onChange={selectChange}>
            <option selected disabled value="">Choose a process</option>
            <option value="daily">Daily Task</option>
            <option value="weekly">Weekly Task</option>
            <option  value="monthly">Monthly Task</option>
          </select>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task:ITask, key:number) => {
         return <TodoTask key={key} task={task} deleteTask={deleteTask} />
        
        })}
        
        
      </div>
    </div>
  );
};

export default App;
