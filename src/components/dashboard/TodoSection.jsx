import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { todoList } from "../../constants";

// todo section
const TodoSection = () => {
  return (
    <div className="mt-4">
      <h5>Your to-do list</h5>
      <ul className="list-group to-do overflow-auto">
        {todoList.map((todo, i) => (
          <li key={todo.title+i} className="list-group-item bg-transparent border-0">
            <div className="d-flex align-items-center">
              <div className="to-do__icon">
                <FontAwesomeIcon icon={todo.icon} />
              </div>
              <div className="d-flex ms-4 flex-column justify-content-center">
                <h6 className="mb-0">{todo.title}</h6>
                <small className="text-muted mb-0">{todo.date.toDateString()}</small>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoSection;
