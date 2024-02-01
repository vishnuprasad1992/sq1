import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getRequest } from "../../api";

const DashboardEmail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getEmails();
  }, []);

  const getEmails = async () => {
    const result = await getRequest("emails");
    setData(result?.data);
  };

  return (
    <>
      <h6 className="mt-3 pb-2">Recent emails</h6>
      <Table hover responsive>
        <tbody>
          {data.length > 0 ? (
            data.map((item, i) => (
              <tr key={item.name + i} className="text-capitalize">
                <td>
                  <img src={item.img} alt="image" className="email-img" />
                </td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.time}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-5">
                No emails were found!
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default DashboardEmail;
