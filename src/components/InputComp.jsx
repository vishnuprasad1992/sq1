import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { selectRoles } from "../constants";

const InputComp = ({ addFormFields, handleChange, data, errs }) => {
  return (
    <Form>
      {Object.values(addFormFields).map((item, i) =>
        item.type === "select" ? (
          <div className="d-flex">
            <Form.Label className="text-start me-1" column sm="4">
              {item.label}
            </Form.Label>
            <div className="col-sm-8">
              <Form.Select
                value={data[item.name]}
                onChange={handleChange}
                name={item.name}
              >
                <option className="text-capitalize">
                  {data?.role ? data.role : "Select Role"}
                </option>
                {selectRoles.map((role, i) => (
                  <option
                    key={role + i}
                    value={role}
                    className="text-capitalize"
                  >
                    {role}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>
        ) : (
          <Form.Group key={item.label + i} as={Row} className="mb-3 ">
            <Form.Label className="text-start" column sm="4">
              {item.label}
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type={item.type}
                value={data[item.name]}
                onChange={handleChange}
                name={item.name}
                placeholder={item.placeHolder}
                maxLength={
                  item.name === "mobile"
                    ? 10
                    : item.name === "name"
                    ? 15
                    : undefined
                }
                minLength={item.min}
                required={item.required}
                autoFocus={i === 0}
              />
            </Col>
            {errs && errs.hasOwnProperty(item.name) && (
              <small className="text-danger text-end mb-0 mt-1">
                {" "}
                {errs[item.name]}
              </small>
            )}
          </Form.Group>
        )
      )}
    </Form>
  );
};

export default InputComp;
