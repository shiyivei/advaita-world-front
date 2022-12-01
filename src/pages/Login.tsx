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
import axios from "axios";

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

class Login extends React.Component {
  // class Login extends React.Component {
  state = {
    InputMail: "", //输入邮箱
    InputCode: "", //输入验证码
    InputPassword: "", //输入密码
    time: 60,
    btnDisable: false,
    btnContent: "发送验证码",
  };

  handleGetInputMail = (event: any) => {
    // 定义要获取的值,并绑定事件
    this.setState({
      InputMail: event.target.value,
    });
  };
  handleGetInputCode = (event: any) => {
    // 定义要获取的值,并绑定事件
    this.setState({
      InputCode: event.target.value,
    });
  };
  handleGetInputPassword = (event: any) => {
    // 定义要获取的值,并绑定事件
    this.setState({
      InputPassword: event.target.value,
    });
  };

  handleForm = (form: any) => {
    const { InputMail } = this.state;
    const { InputCode } = this.state;
    const { InputPassword } = this.state;

    console.log(
      "------get form value:",
      InputMail,
      InputCode,
      InputPassword
    );
  };

  handleMail = () => {
    // 在函数中将值绑定并使用
    const { InputMail } = this.state;
    // 对获取到的值进行操作，比如发dispatch等
    console.log("------Get Mail is", InputMail);
    this.sendVerifyCode(InputMail);
  };

  sendVerifyCode = async (mail: any) => {
    let url: string =
      "https://api-connect.2fei2.com/Api/Index/getCode/type/login/to/" +
      mail;

    console.log("请求的路径:", url);

    await axios.get(url).then((res) => {
      console.log(
        "--------------------------------data:",
        JSON.stringify(res.data)
      );
    });
  };

  // const [time, setCount] = useState(60);

  // timeClick = () => {
  //   let times = time;
  //   let timer = setInterval(function () {
  //     if (times < 1) {
  //       setCount(60);
  //       clearInterval(timer);
  //     } else {
  //       times -= 1;
  //       setCount(times);
  //     }
  //   }, 1000);
  // };
  //   return (
  //     <>
  //       <div>
  //         <div className="App">
  //           <div className="App-body">
  //             <div className="Mail-Block">
  //               <Form
  //                 name="basic"
  //                 labelCol={{ span: 8 }}
  //                 wrapperCol={{ span: 16 }}
  //                 initialValues={{ remember: true }}
  //                 onFinish={onFinish}
  //                 onFinishFailed={onFinishFailed}
  //                 autoComplete="off"
  //               >
  //                 <ul className="Mail-list">
  // <li className="Input-Email">
  //   <Form.Item
  //     // label="Username"
  //     name="email address"
  //     rules={[
  //       {
  //         // required: true,
  //         // message: "请输入验证码",
  //       },
  //     ]}
  //   >
  //     <Input placeholder="请输入邮件地址" />
  //   </Form.Item>
  // </li>

  //                   <li className="Submit-Data">
  //                     <Form.Item
  //                       wrapperCol={{
  //                         offset: 8,
  //                         span: 16,
  //                       }}
  //                     >
  //                       <Button
  //                         className="Submit-button"
  //                         type="primary"
  //                         htmlType="submit"
  //                       >
  //                         登录
  //                       </Button>
  //                     </Form.Item>
  //                   </li>
  //                 </ul>
  //               </Form>
  //             </div>

  //           </div>

  //         </div>
  //       </div>
  //     </>
  //   );

  render() {
    let timeChange: any;
    let ti = this.state.time;
    //关键在于用ti取代time进行计算和判断，因为time在render里不断刷新，但在方法中不会进行刷新
    const clock = () => {
      if (ti > 0) {
        //当ti>0时执行更新方法
        ti = ti - 1;
        this.setState({
          time: ti,
          btnContent: ti + "s 后重新发送",
        });
        console.log(ti);
      } else {
        //当ti=0时执行终止循环方法
        clearInterval(timeChange);
        this.setState({
          btnDisable: false,
          time: 10,
          btnContent: "发送验证码",
        });
      }
    };

    const sendCode = () => {
      this.setState({
        btnDisable: true,
        btnContent: "60s后重新发送",
      });
      //每隔一秒执行一次clock方法
      timeChange = setInterval(clock, 1000);
    };

    return (
      <div>
        <div className="App">
          <div className="App-body">
            <div className="Mail-Block">
              <div className="Title-Name">
                Welcome to login Advaita
              </div>
              <ul className="Mail-list">
                <li className="Input-Email">
                  <input
                    value={this.state.InputMail}
                    onChange={
                      this.handleGetInputMail
                    }
                    placeholder="请输入邮件地址"
                  />
                </li>
                <li className="Input-Verification-Code">
                  <div className="Inner-list">
                    <input
                      value={this.state.InputCode}
                      onChange={
                        this.handleGetInputCode
                      }
                      placeholder="请输入验证码"
                    />
                    <button
                      className="Code-button"
                      // onClick={this.handleMail}
                      onClick={sendCode}
                      disabled={
                        this.state.btnDisable
                      }
                    >
                      {this.state.btnContent}
                    </button>
                  </div>
                </li>
                <li className="Input-Password">
                  <input
                    placeholder="请输入登录密码"
                    id="password"
                    type="password"
                    value={
                      this.state.InputPassword
                    }
                    onChange={
                      this.handleGetInputPassword
                    }
                  />
                </li>
                <li className="Check-Remember">
                  <Checkbox>Remember me</Checkbox>
                </li>
                <li>
                  <button
                    className="Submit-button"
                    onClick={this.handleForm}
                  >
                    登录
                  </button>
                </li>
              </ul>
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
    );
  }
}

export default Login;
