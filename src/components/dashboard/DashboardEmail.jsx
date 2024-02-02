import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getRequest } from "../../api";
import { toast } from "react-toastify";


const DashboardEmail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // calling getEmails function
    getEmails();
  }, []);

  // getting received emails from api
  const getEmails = async () => {
    try {
      const result = await getRequest("emails");
      setData(result?.data);
    } catch (error) {
      toast('Something went wrong,please try again')
    }
  };

  return (
    <>
      <h6 className="mt-3 pb-2">Recent emails</h6>
      {/* email table */}
      <Table hover responsive>
        <tbody>
          {data.length > 0 ? (
            data.map((item, i) => (
              <tr key={item.name + i} className="text-capitalize">
                <td>
                  <img src={item.img} alt="email" className="email-img" />
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
