import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Zoom } from "react-toastify";

export default function SignOut({ setMe }) {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("me");
    setMe(undefined);
    navigate("/signin");
  }, []);
  return (
    <div className="w-100 m-vh-100 d-flex justify-content-center align-items-center"></div>
  );
}
