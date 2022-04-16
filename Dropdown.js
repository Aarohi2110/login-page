import React, { useState } from "react";
import { questions } from "./LoginData";
import "./Dropdown.css";
import axios from "axios";
import MyDropdown from "./MyDropdown";

function Dropdown() {
  const [logindata, setLogindata] = useState(questions);

  return (
    <div className="page">
      <section className="box">
        <h1 className="loginopt">Login/SignUp</h1>
        {logindata.map((cur) => {
          return (
            <MyDropdown
              key={cur.id}
              id={cur.id}
              question={cur.question}
              answer={cur.answer}
            />
          );
        })}
      </section>
    </div>
  );
}

export default Dropdown;
