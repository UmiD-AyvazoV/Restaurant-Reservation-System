import { useEffect, useState } from "react";
import api from "../api/reserv";
import Card from "react-bootstrap/Card";
import Loading from "../components/Loading";

import { Alert, Space } from "antd";
import { AiTwotoneDelete } from "react-icons/ai";

const Booking = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const getReserv = async () => {
      setLoading(true);
      const res = await api.get("/reserv");
      setData(res.data);
      setLoading(false);
    };
    getReserv();
  }, []);

  const delReserv = async (id) => {
    let conf = confirm("Are you sure to delete it ?");
    if (conf) {
      setLoading(true);
      setSuccess(true);
      await api.delete(`/reserv/${id}`);
      setData(data.filter((f) => f.id !== id));
      setLoading(false);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="container">
      {success && (
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Alert message="Success Tips" type="success" showIcon />
        </Space>
      )}
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {data.length > 0 &&
          data.map((d, i) => {
            return (
              <div key={i} className="reservation">
                <Card className="text-center">
                  <Card.Header>
                    <AiTwotoneDelete onClick={() => delReserv(d.id)} />
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>Reservation</Card.Title>
                    <Card.Text>Name: {d.name}</Card.Text>
                    <Card.Text>Surname: {d.surname}</Card.Text>
                    <Card.Text>Person: {d.guest}</Card.Text>
                    <Card.Text>Phone Number: {d.number}</Card.Text>
                    <Card.Text>Date: {d.date}</Card.Text>
                    <Card.Text>Time: {d.time}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted"></Card.Footer>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Booking;