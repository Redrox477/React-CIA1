import React, { useState, useEffect } from "react";
import '../Components/Login.css'
export default function LoginForm() {
  let [pcolor, setpColor] = useState("");
  let [ucolor, setuColor] = useState("");
  let [ecolor, seteColor] = useState("");
  let [umsg, setuMsg] = useState("");
  let [emsg, seteMsg] = useState("");
  let [pmsg, setpMsg] = useState("");
  const validatePwd = (pwd) => {
    let strength = 0;

    if (pwd.match(/(?=.*[a-z])/)) {
      strength++;
    }

    if (pwd.match(/(?=.*[A-Z])/)) {
      strength++;
    }

    if (pwd.match(/(?=.*[0-9])/)) {
      strength++;
    }

    if (pwd.match(/(?=.*[!@#\$%\^&\*])/)) {
      strength++;
    }

    return strength;
  };
  const handlePwd = (event) => {
    const pwd = event.target.value;
    if (validatePwd(pwd) == 1) {
      setpColor("red");
      setpMsg("Password is Weak");
    } else if (validatePwd(pwd) == 2) {
      setpColor("orange");
      setpMsg("Password is Good");
    } else if (validatePwd(pwd) == 3) {
      setpColor("lightgreen");
      setpMsg("Password is Strong");
    } else if (validatePwd(pwd) == 4) {
      setpColor("green");
      setpMsg("Password is Very Strong");
    }
  };
  const handleEmail = (event) => {
    const email = event.target.value;
    if (email.length == 0) {
      seteColor("red");
      seteMsg("Invalid Email");
    }
  };
  const handleUser = (event) => {
    const user = event.target.value;
    if (user.length == 0) {
      setuColor("red");
      setuMsg("Please Fill the column");
    }
  };

  return (
    <div className="container">
      <br />
      <form>
        <label htmlFor="username">Enter your username</label>
        <input
          type="text"
          name="user"
          placeholder="your Username"
          id="username"
          className={ucolor}
          onChange={handleUser}
        />
        <label id="message">{umsg}</label>
        <br />
        <br />

        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          id="email"
          className={ecolor}
          onChange={handleEmail}
        />
        <label id="message">{emsg}</label>
        <br />
        <br />
        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          name="pwd"
          placeholder="Your Password"
          id="password"
          className={pcolor}
          onChange={handlePwd}
        />
        <label id="message" style={{ color: pcolor }}>
          {pmsg}
        </label><br></br><br></br>
              <button>Submit</button>
      </form>
    </div>
  );
}
