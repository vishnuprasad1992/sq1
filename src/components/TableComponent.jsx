import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { tableHeadings } from "../constants";
import { deleteRequest, getRequest } from "../api";
import ModalComponent from "./ModalComponent";
import AddForm from "./AddForm";
import { useNavigate } from "react-router-dom";
import DeleteComponent from "./DeleteComponent";
import { toast } from "react-toastify";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isAddModal, setIsAddModal] = useState(false);

  useEffect(() => {
    getEmployees();
  }, []);
  const handleClose = () => {
    setIsAddModal(false);
    setIsEdit(false);
    setShowDeleteModal(false);
    setItem(null);
  };
  const getEmployees = async () => {
    const result = await getRequest("users");
    setData(result?.data);
  };
  const handleDelete = (item) => {
    setItem(item);
    setShowDeleteModal(true);
  };
  const handleEdit = (item) => {
    setItem(item);
    setIsEdit(true);
  };
  const handleDeleteSubmit = async () => {
    const response = await deleteRequest(`users/${item.id}`);
    if (response.status === 200) {
      toast("Employee Deleted Successfully");
      getEmployees();
      handleClose();
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="mb-3">Employee Details</h4>
        <div className="text-end my-2 mb-4">
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/dashboard")}
            className="fw-bold fs-w500"
          >
            Go to Dashboard
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsAddModal(true)}
            className="fw-bold fs-w500  ms-2"
          >
            Add Employee
          </Button>
        </div>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            {tableHeadings.map((heading, i) => (
              <th key={heading + i}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, i) => (
              <tr key={item.emp_id + i} className="text-capitalize">
                <td>{i + 1}</td>
                <td>{item.emp_id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.role}</td>
                <td>
                  <>
                    <Button
                      variant="secondary"
                      onClick={() => handleEdit(item)}
                      className="me-2"
                      size="sm"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </Button>
                  </>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={tableHeadings.length} className="text-center p-5">
                No Employees Found,please add new employee!
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      <ModalComponent
        show={(item && (showDeleteModal  || isEdit)) || isAddModal}
        handleClose={handleClose}
        title={`${
          showDeleteModal ? "Delete" : isEdit ? "Update" : "Add"
        } Employee`}
      >
        {showDeleteModal && (
          <DeleteComponent
            handleClose={handleClose}
            handleSumbit={handleDeleteSubmit}
          />
        )}
        {!showDeleteModal &&  (
          <AddForm
            handleClose={handleClose}
            data={item}
            refresh={getEmployees}
          />
        )}
      </ModalComponent>
    </>
  );
};

export default TableComponent;
