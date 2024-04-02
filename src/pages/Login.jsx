import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Alert, Space } from "antd";

import api from "../api/reserv";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [information, setInformation] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    const res = await api.get("/users");
    setUsers(res.data);
    users.filter((user) =>
      values.username === user.username && values.password === user.password
        ? navigate("/")
        : setInformation(true)
    );
  };

  return (
    <div className="login">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {information && (
          <Space
            direction="vertical"
            style={{
              width: "100%",
              marginBottom: '15px'
            }}
          >
            <Alert message="The information is wrong" type="info" showIcon />
          </Space>
        )}
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;