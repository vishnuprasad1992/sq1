import { Button } from "react-bootstrap";
import { addBtns, addFormFields } from "../constants";
import { useEffect, useState } from "react";
import InputComp from "./InputComp";

const AddForm = ({ handleClose, data }) => {
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (data) setFormData({ data });
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSumbit = (e) => {
    console.log(formData, "formdata");
  };
  return (
    <>
      <InputComp
        addFormFields={{ ...addFormFields }}
        handleChange={handleChange}
        data={formData}
      />
      <div className="mt-2 float-end">
        {addBtns.map((btn) => (
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

export default AddForm;
