import { useEffect, useState } from "react";

export function useTodoApp() {
    const [tasks, setTasks] = useState(() => {
        const savedTareas = localStorage.getItem("tasks");
        return savedTareas ? JSON.parse(savedTareas) : [];
    });

    const addTasks = (newTasks) => {
        setTasks([...tasks, newTasks]);
    };

    const taskSelects = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completada = !newTasks[index].completada;
        setTasks(newTasks);
    };

    const deleteTasks = (index) => {
        if (window.confirm("¿Seguro que quieres eliminar esta tarea?")) {
            const newTasks = [...tasks];
            newTasks.splice(index, 1);
            setTasks(newTasks);
        }
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return [
        tasks,
        addTasks,
        taskSelects,
        deleteTasks
    ]


}