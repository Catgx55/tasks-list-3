import { ChakraProvider } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { CgDarkMode } from "react-icons/cg";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import { useTodoApp } from "./hooks/useTodoApp";
import "./App.css";

function App() {
    const [tasks, addTasks, taskSelects, deleteTasks] = useTodoApp();
const { colorMode, toggleColorMode } = useColorMode();

const addTask = (newTasks) => {
    addTasks(newTasks);
};

const taskSelect = (index) => {
    taskSelects(index);
};

const deleteTask = (index) => {
        deleteTasks(index);
};

return (
    <ChakraProvider>
    <div className="App">
        <header>
        <CgDarkMode onClick={toggleColorMode} className="oscure">
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </CgDarkMode>
        </header>
        <Header />
        <Task addTask={addTask} />
        <TaskList
        tasks={tasks}
        taskSelect={taskSelect}
        deleteTask={deleteTask}
        />
    </div>
    </ChakraProvider>
);
};

export default App;
