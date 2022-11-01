import React, { useContext } from "react";
import { AppContext } from "../page/Context";

const Login = () => {
  const { setUsername } = useContext(AppContext); //apa aja yang mau diambil dari context
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};

export default Login;
