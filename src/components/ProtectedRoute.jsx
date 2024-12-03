import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { isLogin } = useAuth();

  console.log(isLogin);

  if (!isLogin) {
    return <Navigate to="/notadmin" replace />;
  }

  return children;
}
