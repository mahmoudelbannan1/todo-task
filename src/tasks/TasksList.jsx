import "./tasks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TasksList = ({ data, deleteTaskFun, compleatTaskFun }) => {
  return (
    <>
      {data.map((task) => {
        return (
          <div key={task.id} className="Todo ">
            <p className={task.isFinshed ? "finshed" : ""}>{task.value}</p>
            <div>
              <FontAwesomeIcon
                className="edit-icon"
                icon={faPenToSquare}
                onClick={() => compleatTaskFun(task.id)}
              />
              <FontAwesomeIcon
                className="delete-icon"
                icon={faTrash}
                onClick={() => deleteTaskFun(task.value)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TasksList;
