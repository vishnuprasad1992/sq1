import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

const LinkComponent = ({ path, className, icon }) => {
  const location =useLocation();
  
  return (
    <Link to={path} className={`text-white py-md-4 py-sm-2 ${location.pathname===path && 'active'} ${className}`}>
      <FontAwesomeIcon icon={icon} className="fa-xl" />
    </Link>
  );
};

export default LinkComponent;
