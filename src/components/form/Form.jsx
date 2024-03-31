import { useState } from "react";

const Form = ({ addTaskFun }) => {
  const [task, setTask] = useState("");

  const changeInputHandler = (e) => {
    setTask(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            onClick={() => {
              addTaskFun(task);
              setTask("");
            }}
          >
            Add Task
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your task"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            onChange={changeInputHandler}
            value={task}
          />
        </div>
      </div>
    </>
  );
};

export default Form;
