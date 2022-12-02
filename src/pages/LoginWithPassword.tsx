import React from "react";
import "./Pages.css";
import "../App.css";

import { Link } from "react-router-dom";
import Navigation_Header from "./Navigation-Header";
import Navigation_Tail from "./Navigation-Tail";
import RegisterOrLogin from "../components/RegisterOrLogin";
import TestRouter from "./TestRouter";
import axios from "axios";

import { Checkbox } from "antd";
import { Base64 } from "js-base64";

class Login extends React.Component {
  state = {
    InputMail: "", //输入邮箱
    InputPassword: "", //输入密码
  };

  handleGetInputMail = (event: any) => {
    // 定义要获取的值,并绑定事件
    this.setState({
      InputMail: event.target.value,
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
    const { InputPassword } = this.state;

    console.log(
      "------get form value:",
      InputMail,
      InputPassword
    );
  };

  sendVerifyCode = async (mail: any) => {
    let base64Mail = Base64.encode(mail);
    const params = { mail: base64Mail };
    let url: string =
      "/Api/Index/getCode/type/login/to";

    console.log("发送验证码:", url);

    await axios.post(url, params).then((res) => {
      console.log(
        "验证码发送结果:",
        JSON.stringify(res.data)
      );
    });
  };

  verifyCode = async (
    mail: string,
    verify_code: string
  ) => {
    let base64Mail = Base64.encode(mail);

    const params = {
      mail: base64Mail,
      code: verify_code,
    };

    let url: string =
      "https://api-connect.2fei2.com/Api/Index/checkCode/type/login/to";

    console.log("验证验证码:", url);

    await axios.post(url, params).then((res) => {
      console.log(
        "验证码验证结果:",
        JSON.stringify(res.data)
      );
    });
  };

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-body">
            <div className="Password-Block">
              <div className="Title-Name">
                密码登录
              </div>
              <ul className="Password-list">
                <li className="Input-Email">
                  <input
                    value={this.state.InputMail}
                    onChange={
                      this.handleGetInputMail
                    }
                    placeholder="请输入邮件地址"
                  />
                </li>
                <li className="Input-Password">
                  <input
                    value={
                      this.state.InputPassword
                    }
                    onChange={
                      this.handleGetInputPassword
                    }
                    placeholder="请输入密码"
                  />
                </li>

                <li className="Check-Remember">
                  <div className="Check-Box">
                    <Checkbox>记住密码</Checkbox>
                  </div>
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
