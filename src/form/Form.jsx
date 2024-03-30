// import { useState } from "react";

const Form = (props) => {
  console.log(props);
  const { addTaskFun } = props;
  // const [tasks, setTasks] = useState([]);
  let inputValue;
  const changeInputHandler = (e) => {
    inputValue = e.target.value;
  };
  // const addTaskHandler = () => {
  //   setTasks([...tasks, { value: inputValue, isFinshed: false }]);
  //   // tasks.push({ value: inputValue, isFinshed: false });
  // };
  return (
    <>
      <div className="container">
        <div className="input-group mb-3">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon1"
            onClick={() => addTaskFun(inputValue)}
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
          />
        </div>
        {/* 
        {tasks.map((task) => {
          return <p>{task.value}</p>;
        })} */}
      </div>
    </>
  );
};

export default Form;
