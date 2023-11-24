import React, { useState } from "react";
import { Button } from '@chakra-ui/react'

function Task({ addTask }) {
  const [tasks, setTasks] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [formError, setFormError] = useState("");

  const handleInputChange = (e) => {
    setTasks(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tasks.trim().length < 3) {
      setFormError("El nombre de la tarea debe tener al menos 3 caracteres.");
      return;
    }
    addTask({
      texto: tasks,
      descripcion: taskDescription,
      completada: false,
    });
    setTasks("");
    setTaskDescription("");
    setFormError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={tasks}
        onChange={handleInputChange}
        className="task-add"
      />
      <ul>
        <br />
        <textarea
          placeholder="Descripción"
          value={taskDescription}
          onChange={handleDescriptionChange}
        />
      </ul>
      <Button colorScheme="black" type="submit">Agregar</Button>
      {formError && <p className="error-message">{formError}</p>}
    </form>
  );
}

export default Task;
