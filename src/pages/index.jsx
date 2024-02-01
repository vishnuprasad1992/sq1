import { Card } from "react-bootstrap";
import TableComponent from "../components/TableComponent";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const Home = () => {
  

  return (
    <div className="home bg-light">
      <ToastContainer />
      <h2 className="text-center pb-3 pt-5 ">SQ1 TASK</h2>
      
      <Card className="mx-4 my-2 p-3">
        <TableComponent />
      </Card>
      
    </div>
  );
};

export default Home;
