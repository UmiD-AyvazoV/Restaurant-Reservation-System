import { useEffect, useState } from "react";
import api from "../api/reserv";
import Card from "react-bootstrap/Card";
import Loading from "../components/Loading";

const Booking = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getReserv = async () => {
      setLoading(true);
      const res = await api.get("/reserv");
      setData(res.data);
      setLoading(false);
    };
    getReserv();
  }, []);
  return (
   loading ? <Loading /> : <div className="container">
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {data.map((d) => {
          return (
            <div key={d.id} className="reservation">
              <Card className="text-center">
                <Card.Header></Card.Header>
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