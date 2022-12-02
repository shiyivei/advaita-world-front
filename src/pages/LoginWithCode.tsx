import React from "react";
import "./Pages.css";
import "../App.css";

import { Link } from "react-router-dom";
import Navigation_Header from "./Navigation-Header";
import Navigation_Tail from "./Navigation-Tail";
import RegisterOrLogin from "../components/RegisterOrLogin";
import TestRouter from "./TestRouter";
import axios from "axios";

import { Base64 } from "js-base64";

class Login extends React.Component {
  state = {
    InputMail: "", //输入邮箱
    InputCode: "", //输入验证码
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

    console.log(
      "------get form value:",
      InputMail,
      InputCode
    );
    this.verifyCode(InputMail, InputCode);
  };

  sendVerifyCode = async (mail: any) => {
    let base64Mail = Base64.encode(mail);
    const params = {
      type: "login",
      to: base64Mail,
    };
    let url: string = "/api1/Api/Index/getCode";
    let test_url: string =
      "/api3/Api/Index/getCode";

    console.log("发送验证码:", url);

    await axios
      .post(test_url, params)
      .then((res) => {
        console.log(
          "测试验证码发送结果:",
          JSON.stringify(res.data)
        );
      });

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
      type: "login",
      to: base64Mail,
      code: verify_code,
    };

    let url: string = "/api2/Api/Index/checkCode";

    console.log("验证验证码:", url);

    await axios.post(url, params).then((res) => {
      console.log(
        "验证码验证结果:",
        JSON.stringify(res.data)
      );
    });
  };

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
          time: 60,
          btnContent: "发送验证码",
        });
      }
    };

    const sendCode = () => {
      this.setState({
        btnDisable: true,
        btnContent: "60s 后重新发送",
      });
      //每隔一秒执行一次clock方法
      timeChange = setInterval(clock, 1000);

      // 在函数中将值绑定并使用
      const { InputMail } = this.state;
      // 对获取到的值进行操作，比如发dispatch等
      console.log("------Get Mail is", InputMail);
      this.sendVerifyCode(InputMail);
    };

    return (
      <div>
        <div className="App">
          <div className="App-body">
            <div className="Mail-Block">
              <div className="Title-Name">
                验证码登录
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
                      onClick={sendCode}
                      disabled={
                        this.state.btnDisable
                      }
                    >
                      {this.state.btnContent}
                    </button>
                  </div>
                </li>

                {/* <li className="Check-Remember">
                  <div className="Check-Box">
                    <Checkbox>
                      Remember me
                    </Checkbox>
                  </div>
                </li> */}
                <li>
                  <button
                    className="Submit-button"
                    onClick={this.handleForm}
                  >
                    登录
                  </button>
                </li>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/loginwithpassword"
                  >
                    <div className="LoginPassWord">
                      使用密码登录
                    </div>
                  </Link>
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
