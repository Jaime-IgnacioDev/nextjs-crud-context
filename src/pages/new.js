import { useState } from "react";
import Layout from "../components/Layout"
import { useTasks } from "../context/taskContext";

const TaskFormPage = () => {

    const [task, setTask] = useState({
        tittle: '',
        description: '',
    })
    const {createTask} = useTasks()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask({...task, [name]: value})
    }

    const handleSubmit = e =>{
        e.preventDefault();
        createTask(task.tittle, task.description)
    }

  return (
    <Layout>
        <form onSubmit={handleSubmit}>
            <h1>Nueva Tarea</h1>

            <input 
                name="tittle"
                type="text" 
                placeholder="Escribe una tarea" 
                className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5 mt-2"
                onChange={handleChange}    
            />

            <textarea 
                name="description"
                rows="2" 
                placeholder="Escribe una descripción"
                className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5 mt-2"
                onChange={handleChange}
                >
            </textarea>

            <button 
            className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30" disabled={!task.tittle}>
                Guardar
            </button>
        </form>
    </Layout>
  );
};

export default TaskFormPage