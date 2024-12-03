import React, { useState } from "react";
import Input from "./Input";
import { fetchApi } from "../service/fetch";
import classes from "../styles/css/contact.module.css";
import Toastify from "../components/Toastify.jsx";

export default function Form({ styleBlack }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const resetForm = (form) => {
    form.reset();
    setError(null);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);

    const data = Object.fromEntries(fd.entries());

    if (error != null) return;

    setLoading(true);

    const url = "http://13.55.164.165:8000/api/send_email";

    try {
      const response = await fetchApi(url, data);

      if (response.ok) {
        Toastify("Submitted Successfully", 1000);
        resetForm(e.target);
      } else {
        Toastify("Duplicate occurs", 1000);
      }
    } catch (error) {
      Toastify(error, 1000);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(e) {
    const value = e.target.value;

    if (value.length < 10) {
      setError("Phone No should contain 10 digits");
    } else if (value.length >= 10) {
      setError(null);
    }
  }

  return (
    <div
      className={classes.contactForm}
      style={{
        backgroundColor: styleBlack ? "#292828" : undefined,
      }}
    >
      {styleBlack && (
        <div className={classes.homeContactImgs}>
          <img src="img/let-connect1.PNG" alt="" />
          <img src="img/let-connect.PNG" alt="" />
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Name"
          placeholder="Enter your name"
          type="text"
          required={true}
          styleBlack={styleBlack}
        />
        <div>
          <Input
            label="Contact No"
            placeholder="Enter your Number"
            type="number"
            name="phone"
            required={true}
            onChange={handleChange}
            styleBlack={styleBlack}
          />
          <p style={{ color: "red", fontSize: "15px" }}>{error}</p>
        </div>
        <Input
          label="Business Name"
          placeholder="Enter your Business"
          type="text"
          name="name_of_business"
          required={false}
          styleBlack={styleBlack}
        />
        <Input
          label="Email"
          placeholder="Enter your Email"
          type="email"
          name="email"
          required={true}
          styleBlack={styleBlack}
        />

        <div className={classes.submitButton}>
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: loading ? "gray" : "black",
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
