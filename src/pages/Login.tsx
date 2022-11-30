import React from "react";
import { useParams } from "react-router-dom";
import { redirect } from "react-router-dom";
import "./Pages.css";
import "../App.css";
import advaita_world_logo from "../pages/statics/img/backgroud-logo.png";
import art_adt_combination from "../pages/statics/img/art-adt-combination.png";

import { Link } from "react-router-dom";
import Navigation_Header from "./Navigation-Header";
import Navigation_Tail from "./Navigation-Tail";
import ConnectWallet from "../components/Wallet";
import TestRouter from "./TestRouter";

import { useState, useEffect } from "react";

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

  const [time, setCount] = useState(60);

  const timeClick = () => {
    let times = time;
    let timer = setInterval(function () {
      if (times < 1) {
        setCount(60);
        clearInterval(timer);
      } else {
        times -= 1;
        setCount(times);
      }
    }, 1000);
  };

  return (
    <>
      <div>
        <div className="App">
          <div className="App-body">
            <div className="Mail-Block">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <ul className="Mail-list">
                  <li className="Input-Email">
                    <Form.Item
                      // label="Username"
                      name="email address"
                      rules={[
                        {
                          required: true,
                          message: "请输入验证码",
                        },
                      ]}
                    >
                      <Input placeholder="请输入邮件地址" />
                    </Form.Item>
                  </li>
                  <li className="Input-Verification-Code">
                    <div className="Inner-list">
                      <Form.Item
                        // label="Username"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message:
                              "请输入验证码",
                          },
                        ]}
                      >
                        <Input placeholder="请输入验证码" />
                      </Form.Item>

                      <button
                        className="Code-button"
                        onClick={() =>
                          timeClick()
                        }
                      >
                        {time} s 获取验证码
                      </button>
                    </div>
                  </li>

                  <li className="Input-Password">
                    <Form.Item
                      // label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "请输入密码",
                        },
                      ]}
                    >
                      <Input
                        placeholder="请输入登录密码"
                        id="password"
                        type="password"
                      />
                    </Form.Item>
                  </li>
                  <li className="Check-Remember">
                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Checkbox>
                        Remember me
                      </Checkbox>
                    </Form.Item>
                  </li>

                  <li className="Submit-Data">
                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button
                        className="Submit-button"
                        type="primary"
                        htmlType="submit"
                      >
                        登录
                      </Button>
                    </Form.Item>
                  </li>
                </ul>
              </Form>
            </div>
            <div className="App-header">
              <div className="App-Navigation-Header">
                <div className="Column">
                  <Navigation_Header />
                </div>
              </div>
            </div>
          </div>

          <div className="App-tail">
            <div className="App-Navigation-Tail">
              <Navigation_Tail />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
