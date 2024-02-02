import { Button } from "react-bootstrap";
import { addBtns, addFormFields, editBtns } from "../constants";
import { useEffect, useState } from "react";
import InputComp from "./InputComp";
import { postRequest, putRequest } from "../api";
import { toast } from "react-toastify";
import validator from "validator";

// form for adding an employee
const AddForm = ({ handleClose, data, refresh }) => {
  const [formData, setFormData] = useState({});
  const [errs, setErrs] = useState({});

  useEffect(() => {
    // setting data from props with dependancy
    if (data) setFormData({ ...data });
  }, [data]);

  // on change function to set the new values
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let updatedErr = { ...errs };
    // email validation
    if (name === "email") {
      if (!validator.isEmail(value)) {
        updatedErr = { ...updatedErr, [name]: "Invalid Email" };
        setErrs(updatedErr);
      } else { 
        delete updatedErr[name];
        setErrs({ ...updatedErr });
      }
    }
    // name validation
    if (name === "name") {
      if (!validator.isLength(value,{min:3,max:15})) {
        updatedErr = { ...updatedErr, [name]: "Required minimum 3 and maximum 15 chars" };
        setErrs(updatedErr);
      } else { 
        delete updatedErr[name];
        setErrs({ ...updatedErr });
      }
    }
    // employee id validation
    if (name === "emp_id") {
      if (!validator.isLength(value,{min:4,max:15})) {
        updatedErr = { ...updatedErr, [name]: "Required minimum 4 and maximum 15 chars" };
        setErrs(updatedErr);
      } else { 
        delete updatedErr[name];
        setErrs({ ...updatedErr });
      }
    }
    // mobile number validation
    if (name === "mobile") {
      if (!validator.isMobilePhone((value),'en-IN')) {
        updatedErr = { ...updatedErr, [name]: "Invalid Mobile Number" };
        setErrs(updatedErr);
      } else  { 
        delete updatedErr[name];
        setErrs({ ...updatedErr });
      }
    }
    // role validation
    if (name === "role") {
      if (validator.isEmpty((value))) {
        updatedErr = { ...updatedErr, [name]: "Role is required" };
        setErrs(updatedErr);
      } else { 
        delete updatedErr[name];
         setErrs({ ...updatedErr });
      }
    }
    // setting the values
    setFormData({ ...formData, [name]: value });
  };

  // submit function
  const handleSumbit = async (e) => {
    let response;
    let type = "added";
    // validating the object
    if(Object.keys(errs).length >0 || Object.values(formData).length<5){
      toast('Please enter the correct values')
      return;
    }
    if (data) {
      // updating the existing data
      type = "updated";
      response = await putRequest(`users/${data.id}`, formData);
    } else response = await postRequest("users", formData); // creating a new data
    if (response.status === 201 || response.status === 200) {
      toast(`Employee ${type} successfully!`);
      setTimeout(() => {
        refresh(); //refreshing the data
        handleClose(); //closing the modal
      }, 500);
    }
  };
  return (
    <>
    {/* input component for getting and setting the values */}
      <InputComp
        addFormFields={{ ...addFormFields }}
        handleChange={handleChange}
        data={formData}
        errs={errs}
      />
      {/* handle btns mapping from btn constants */}
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
