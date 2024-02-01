import { Button } from "react-bootstrap";
import { addBtns, addFormFields, editBtns } from "../constants";
import { useEffect, useState } from "react";
import InputComp from "./InputComp";
import { postRequest, putRequest } from "../api";
import { toast } from "react-toastify";
import validator from "validator";

const AddForm = ({ handleClose, data, refresh }) => {
  const [formData, setFormData] = useState({});
  const [errs, setErrs] = useState({});

  useEffect(() => {
    if (data) setFormData({ ...data });
  }, [data]);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let updatedErr = { ...errs };
    if (name === "email") {
      if (!validator.isEmail(value)) {
        updatedErr = { ...updatedErr, [name]: "Invalid Email" };
        setErrs(updatedErr);
      } else { 
        delete updatedErr[name];
        setErrs({ ...updatedErr });
      }
    }
    if (name === "name") {
      if (!validator.isLength(value,{min:3,max:15})) {
        updatedErr = { ...updatedErr, [name]: "Required minimum 3 and maximum 15 chars" };
        setErrs(updatedErr);
      } else { 
        delete updatedErr[name];
        setErrs({ ...updatedErr });
      }
    }
    if (name === "emp_id") {
      if (!validator.isLength(value,{min:4,max:15})) {
        updatedErr = { ...updatedErr, [name]: "Required minimum 4 and maximum 15 chars" };
        setErrs(updatedErr);
      } else { 
        delete updatedErr[name];
        setErrs({ ...updatedErr });
      }
    }
    if (name === "mobile") {
      if (!validator.isMobilePhone((value),'en-IN')) {
        updatedErr = { ...updatedErr, [name]: "Invalid Mobile Number" };
        setErrs(updatedErr);
      } else  { 
        delete updatedErr[name];
        setErrs({ ...updatedErr });
      }
    }
    if (name === "role") {
      if (validator.isEmpty((value))) {
        updatedErr = { ...updatedErr, [name]: "Role is required" };
        setErrs(updatedErr);
      } else { 
        delete updatedErr[name];
         setErrs({ ...updatedErr });
      }
    }
    setFormData({ ...formData, [name]: value });
  };
  const handleSumbit = async (e) => {
    let response;
    let type = "added";
    if(Object.keys(errs).length >0 || Object.values(formData).length<5){
      toast('Please enter the correct values')
      return;
    }
    if (data) {
      type = "updated";
      response = await putRequest(`users/${data.id}`, formData);
    } else response = await postRequest("users", formData);
    if (response.status === 201 || response.status === 200) {
      toast(`Employee ${type} successfully!`);
      setTimeout(() => {
        refresh();
        handleClose();
      }, 500);
    }
  };
  return (
    <>
      <InputComp
        addFormFields={{ ...addFormFields }}
        handleChange={handleChange}
        data={formData}
        errs={errs}
      />
      <div className="mt-2 float-end">
        {(data ? editBtns : addBtns).map((btn) => (
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
