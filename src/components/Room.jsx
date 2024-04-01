import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import api from "../api/reserv";

import Card from "react-bootstrap/Card";
import { Alert, Space } from "antd";

const Room = ({ room }) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  };

  const handleReserve = async () => {
    let conf = confirm("Are you sure about that ?");
    if (conf) {
      setSuccess(true);
      const res = await api.post("/reserv", form);
      setForm(res.data);
      setTimeout(() => {
        setShow(false);
        setSuccess(false);
      }, 1000);
    } else {
      setError(true);
      setTimeout(() => {
        setShow(false);
        setError(false);
      }, 1000);
    }
  };

  return (
    <div className="bs">
      <Card>
        <Card.Img variant="top" src={room.img} className="smallImg" />
        <Card.Body>
          <Card.Title>{room.name}</Card.Title>
          <Card.Text>{room.telNumber}</Card.Text>
          <Card.Text>{room.address}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Book Now
          </Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
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
        {error && (
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Alert message="Error" type="error" showIcon />
          </Space>
        )}
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row g-3 mb-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
                name="name"
                onChange={handleForm}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
                name="surname"
                onChange={handleForm}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Phone number"
                aria-label="Phone number"
                name="number"
                onChange={handleForm}
              />
            </div>
          </div>
          <div className="row g-3">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Number of guests"
                aria-label="Number of guests"
                name="guest"
                onChange={handleForm}
              />
            </div>
            <div className="col">
              <input
                type="date"
                className="form-control"
                aria-label="Date"
                name="date"
                onChange={handleForm}
              />
            </div>
            <div className="col">
              <input
                type="time"
                className="form-control"
                aria-label="Time"
                name="time"
                onChange={handleForm}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="reserveBtn" onClick={handleReserve}>
            Reserve a table
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;