import { MdAutoDelete } from "react-icons/md";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

function TaskList({ tasks, taskSelect, deleteTask }) {
    return (
    <div>
        <h2>Pendientes:</h2>
        <ul>
        {tasks.map((tasks, index) => (
            !tasks.completada && (
            <li key={index}>
                <RiCheckboxBlankCircleLine checked={tasks.completada} onClick={() => taskSelect(index)} className="completed-icon" />
                <span className={tasks.completada ? 'completada' : ''}>
                {tasks.texto}
                </span>
                {tasks.descripcion && (
                <p className="descripcion">Descripción: {tasks.descripcion}</p>
                )}
                <MdAutoDelete onClick={() => deleteTask(index)} className="delete-icon" />
            </li>
            )
        ))}
        </ul>
        <h2>Completadas:</h2>
        <ul>
        {tasks.map((tasks, index) => (
            tasks.completada && (
            <li key={index}>
                <RiCheckboxBlankCircleFill checked={tasks.completada} onClick={() => taskSelect(index)} className="completed-icon" />
                <span className={tasks.completada ? 'completada' : ''}>
                {tasks.texto}
                {tasks.descripcion && (
                <p className="descripcion">Descripción: {tasks.descripcion}</p>
                )}
                </span>
                <MdAutoDelete onClick={() => deleteTask(index)} className="delete-icon" />
            </li>
            )
        ))}
        </ul>
    </div>
    );
}

export default TaskList;