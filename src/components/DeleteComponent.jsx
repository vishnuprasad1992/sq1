import { Button } from "react-bootstrap";
import { deleteBtns } from "../constants";

const DeleteComponent = ({handleClose,handleSumbit}) => {
  return (
    <>
      <p>Are you sure want to delete this employee</p>
      <div className="mt-2 float-end">
        {deleteBtns.map((btn) => (
          <Button
            key={btn.title}
            variant={btn.variant}
            className="ms-2"
            onClick={btn.isCancel ? handleClose : handleSumbit}
          >
            {btn.title}
          </Button>
        ))}
      </div>
    </>
  );
};

export default DeleteComponent;
