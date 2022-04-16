import React, { useState } from "react";
import LoginForm from "./LoginForm";

function MyDropdown(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <div className="main-heading">
        <button
          className="login-options"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>
            {showDropdown ? (
              <i class="fas fa-chevron-down"></i>
            ) : (
              <i class="fas fa-chevron-up"></i>
            )}
          </span>
          <span className="questions">{props.question}</span>
        </button>
      </div>
      {showDropdown && <LoginForm id={props.id} />}
    </>
  );
}

export default MyDropdown;
