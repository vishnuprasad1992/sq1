import { Link } from "react-router-dom";

// wrapper component with childremn props
const Wrapper = ({ children }) => {
  return (
    <div className="wrapper bg-light">
      <div className="text-center">
        {children}
        <Link to={"/dashboard"}>Home</Link>
      </div>
    </div>
  );
};

export default Wrapper;
