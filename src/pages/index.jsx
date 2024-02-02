import { Card } from "react-bootstrap";
import TableComponent from "../components/TableComponent";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const Home = () => {
  

  return (
    <div className="home bg-light">
      {/* toast container for showing the toasts on success and failure */}
      <ToastContainer />
      {/* title of the page */}
      <h2 className="text-center pb-3 pt-5 ">SQ1 TASK</h2>
      {/* wrapping the table component on card from react bootstrap */}
      <Card className="mx-4 my-2 p-3">
        {/* table component to show the data */}
        <TableComponent />
      </Card>
      
    </div>
  );
};

export default Home;
