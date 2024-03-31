import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "../form/Form";
import TasksList from "../tasks/TasksList";
uuidv4();

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (inputValue) => {
    setTasks([...tasks, { value: inputValue, id: uuidv4(), isFinshed: false }]);
  };

  const deleteTaskHandler = (task) => {
    const newTasks = tasks.filter((t) => t.value !== task);
    setTasks(newTasks);
  };

  const compleatTaskHandler = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isFinshed: !task.isFinshed } : task
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <Form addTaskFun={addTaskHandler}></Form>
      <TasksList
        data={tasks}
        deleteTaskFun={deleteTaskHandler}
        compleatTaskFun={compleatTaskHandler}
      ></TasksList>
    </div>
  );
};

export default Todo;
