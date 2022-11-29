import React from "react";
import { useParams } from "react-router-dom";
import { redirect } from "react-router-dom";
import "./Pages.css";
import "../App.css";
import advaita_world_logo from "../pages/statics/img/backgroud-logo.png";
import art_adt_combination from "../pages/statics/img/art-adt-combination.png";
import Navigation_Tail from "../pages/Navigation-Tail";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Space,
} from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  function test() {
    if (true) {
      console.log("Login");
    } else {
      console.log("exit");
    }
  }

  return (
    <div className="App">
      <div className="Title">
        <>Welcome to login Advaita</>
      </div>
      <div className="App-body">
        <div className="Information-Form">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className="Input-Email">
              <Form.Item
                // label="Username"
                name="email address"
                rules={[
                  {
                    // required: true,
                    // message: "请输入邮件地址",
                  },
                ]}
              >
                <Input placeholder="请输入邮件地址" />
              </Form.Item>
            </div>
            <div className="Input-Password">
              <Form.Item
                // label="Password"
                name="password"
                rules={[
                  {
                    // required: true,
                    // message:
                    //   "Please input your password!",
                  },
                ]}
              >
                <Input
                  placeholder="请输入登录密码"
                  id="password"
                />
              </Form.Item>
              <input
                type="password"
                placeholder="enter your password"
                id="password"
              ></input>
              <div id="toggle"></div>
              <script type="text/javascript">
                const password =
                document.getElementById("password");
                const toggle =
                document.getElementById("toggle");
              </script>
            </div>
            <div className="Input-Verification-Code">
              <Form.Item
                // label="Username"
                name="username"
                rules={[
                  {
                    // required: true,
                    // message:
                    //   "Please input verification code!",
                  },
                ]}
              >
                <Input placeholder="请输入验证码" />
              </Form.Item>
            </div>
            <div className="Check-Remember">
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </div>
            <div className="Submit-Data">
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
            </div>
            <div className="Submit-For-Verification-Code">
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  Get code
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
      <div className="App-tail">
        <div className="App-Navigation-Tail">
          <Navigation_Tail />
        </div>
      </div>
    </div>
  );
}
