import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TasksProvider = ({ children }) => {

    const [tasks, setTasks] = useState([
        {id: "1", tittle: "firts task", 
        description: "some task"}]);

    const createTask = (tittle, description) => {
        setTasks([...tasks, {
            tittle, 
            description, 
            id: uuid() }]);
    }


    return (
        <TaskContext.Provider value={{tasks, createTask}}>
            { children }
        </TaskContext.Provider>
    );
}