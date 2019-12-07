import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("JWT_Token");
    const config = { headers: { Authorization: token } };
    axios
      .get("http://localhost:5000/cards", config)
      .then(response => setUser(response.data));
  });
  if (!user) return <div>You need to login</div>;

  return <div>{user}</div>;
}
