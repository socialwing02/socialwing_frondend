import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toastify(message, duration = 1000) {
  toast(message, { autoClose: duration });
}
