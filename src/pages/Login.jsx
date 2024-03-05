import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("3129319");
  const [passWord, setPassWord] = useState("");
  return (
    <div className="flex justify-center">
      <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%] ">
        <text className="text-2xl">Login</text>
        <div className="flex mt-3">
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            type="text"
            value={userName}
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="flex mt-3">
          <input
            className="border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200"
            type="password"
            value={passWord}
            placeholder="password"
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        <input
          className="btn mt-7 hover:scale-[1.02]"
          type="button"
          value="login"
        />
      </div>
    </div>
  );
}

export default Login;
