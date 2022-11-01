import React, { useContext } from "react";
import { AppContext } from "../page/Context";

const User = () => {
  const { username } = useContext(AppContext); //apa aja yang mau diambil dari context
  return (
    <div>
      <h1>User:{username}</h1>
    </div>
  );
};

export default User;
