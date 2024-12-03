import React, { useState } from "react";
import { fetchApi } from "../service/fetch";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AdminProtected() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useAuth();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  async function login(e) {
    e.preventDefault();
    try {
      const response = await fetchApi(
        "http://192.168.159.168:5000/api/login",
        user
      );

      if (response.ok) {
        setIsLogin(true);
        navigate("/upload");
      } else {
        navigate("/notadmin");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form onSubmit={login}>
      <Input label="username" onChange={handleChange} name="username" />
      <Input label="password" onChange={handleChange} name="password" />
      <button type="submit">submit</button>
    </form>
  );
}
