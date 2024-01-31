import { Button, Card } from "react-bootstrap";
import TableComponent from "../components/TableComponent";
import ModalComponent from "../components/ModalComponent";
import AddForm from "../components/AddForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isAddModal, setIsAddModal] = useState(false);
  const handleClose = () => setIsAddModal(false);
  const navigate = useNavigate()

  return (
    <div>
      <h2 className="text-center p-5 ">CRUD</h2>
      <div className="text-end my-2">
        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate('/dashboard')}
          className="fw-bold fs-w500"
        >
          Go to Dashboard
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsAddModal(true)}
          className="fw-bold fs-w500 me-4 ms-2"
        >
          Add Employee
        </Button>
      </div>
      <Card className="mx-4 my-2 p-3">
        <TableComponent />
      </Card>
      {isAddModal && (
        <ModalComponent
          show={isAddModal}
          handleClose={handleClose}
          title={"Add Employee"}
        >
          <AddForm handleClose={handleClose} />
        </ModalComponent>
      )}
    </div>
  );
};

export default Home;
