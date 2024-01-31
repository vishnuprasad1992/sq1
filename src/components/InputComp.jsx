import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const InputComp = ({ addFormFields, handleChange,data }) => {
  return (
    <Form>
      {Object.values(addFormFields).map((item, i) => (
        <Form.Group key={item.label+i} as={Row} className="mb-3 ">
          <Form.Label className="text-start" column sm="4">
            {item.label}
          </Form.Label>
          <Col sm="8">
            <Form.Control
              type={item.type}
              value={data?.value}
              onChange={handleChange}
              name={item.name}
              placeholder={item.placeHolder}
            />
          </Col>
        </Form.Group>
      ))}
    </Form>
  );
};

export default InputComp;
