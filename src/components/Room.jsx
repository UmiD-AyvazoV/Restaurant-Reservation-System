import { useState } from "react";
import { Button, Modal, Col, Form, Row, Card } from "react-bootstrap";
import api from "../api/reserv";

import { Alert, Space } from "antd";

const Room = ({ room }) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [information, setInformation] = useState(false);
  const [form, setForm] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

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

  const handleReserve = async (e) => {
    e.preventDefault();
    setValidated(true);
    let conf = confirm("Are you sure about that ?");
    if (
      conf &&
      form.name &&
      form.surname &&
      form.number &&
      form.guest &&
      form.date &&
      form.time
    ) {
      setSuccess(true);
      setInformation(false);
      const res = await api.post("/reserv", form);
      setForm(res.data);
      setTimeout(() => {
        setShow(false);
        setSuccess(false);
      }, 1000);
    } else if (
      conf ||
      !form.name ||
      !form.surname ||
      !form.number ||
      !form.guest ||
      !form.date ||
      !form.time
    ) {
      setInformation(true);
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
        {information && (
          <Space
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Alert message="Please fill in inputs" type="info" showIcon />
          </Space>
        )}
        <Modal.Header>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name="name"
                  onChange={handleForm}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  name="surname"
                  onChange={handleForm}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Control
                  required
                  type="number"
                  placeholder="Phone number"
                  name="number"
                  onChange={handleForm}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control
                  required
                  type="number"
                  placeholder="Number of guests"
                  name="guest"
                  onChange={handleForm}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control
                  required
                  type="date"
                  placeholder="Date"
                  name="date"
                  onChange={handleForm}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Control
                  required
                  type="time"
                  placeholder="Time"
                  name="time"
                  onChange={handleForm}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button
              type="submit"
              className="reserveBtn"
              onClick={handleReserve}
            >
              Reserve a table
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default Room;
