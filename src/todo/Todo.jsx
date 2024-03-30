// import { useState } from "react";

import Form from "../form/Form";

const Todo = () => {
  // const [tasks, setTasks] = useState([]);
  const addTaskHandler = (inputValue) => {
    console.log(inputValue);
    // setTasks([...tasks, { value: inputValue, isFinshed: false }]);
    // tasks.push({ value: inputValue, isFinshed: false });
  };
  return (
    <>
      <Form addTaskFun={addTaskHandler}></Form>
    </>
  );
};

export default Todo;
