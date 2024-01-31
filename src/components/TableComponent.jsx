import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { tableHeadings } from "../constants";

const TableComponent = () => {
    useEffect(() => {
      
    
      
    }, [])
    
  return (
    <>
      <h4 className="mb-3">Employee Details</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            {tableHeadings.map((heading, i) => (
              <th key={heading + i}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <>
                <Button variant="secondary" className="me-2" size="sm">
                  Edit
                </Button>
                <Button variant="danger" size="sm">
                  Delete
                </Button>
              </>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
