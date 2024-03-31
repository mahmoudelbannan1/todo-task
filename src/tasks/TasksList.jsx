import "./tasks.css";

const TasksList = ({ data, deleteTaskFun, compleatTaskFun }) => {
  return (
    <div className="container">
      <h1>hello TasksList</h1>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task) => {
            return (
              <tr key={task.id}>
                <td className={task.isFinshed ? "finshed" : ""}>
                  {" "}
                  {task.value}
                </td>
                <td>
                  <button onClick={() => deleteTaskFun(task.value)}>x</button>
                  <button onClick={() => compleatTaskFun(task.id)}>
                    compleat
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TasksList;
