import React from "react";
import { Link } from "react-router-dom";

export default function Logout() {
  localStorage.removeItem("token");
  return (
    <div>
      <h1>You have been logout</h1>
      <button>
        <Link to="/">Login again</Link>
      </button>
    </div>
  );
}
