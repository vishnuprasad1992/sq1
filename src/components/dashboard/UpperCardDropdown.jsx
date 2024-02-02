import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuDropdown } from "../../constants";

// upper card dropdown menu section
const UpperCardDropdown = () => {
  return (
    <ul className="list-group position-absolute top-100 z-1 w-max">
      {menuDropdown.map((item, i) => (
        <li
          key={item.text + i}
          className="list-group-item p-2"
        >
          <div className="d-flex">
            <div className="dropdown__icon text-blue">
              <FontAwesomeIcon icon={item.icon} />
            </div>
            <p className="mb-0 ms-3 me-2 text-muted fs-menu">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UpperCardDropdown;
