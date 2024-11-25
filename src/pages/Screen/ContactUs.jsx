import React from "react";
import Input from "../../components/Input";
import { fetchApi } from "../../service/fetch";
import classes from "../../styles/css/contact.module.css";

export default function ContactUs() {
  async function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);

    const data = Object.fromEntries(fd.entries());

    console.log(data);

    const response = await fetchApi(data);

    console.log(response);
  }

  return (
    <>
      <section className={classes.contactSection}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              aliquam animi facere dolor repellendus veniam praesentium suscipit
              quos, repellat modi nemo aliquid dolores. Deleniti recusandae
              provident earum ad maiores?
            </p>
            <div>
              <h2>Contact</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit} className={classes.contactForm}>
            <Input
              name="name"
              label="Name"
              placeholder="Enter your name"
              type="text"
            />
            <Input
              label="Contact No"
              placeholder="Enter your Number"
              type="number"
              name="phone"
            />
            <Input
              label="Business Name"
              placeholder="Enter your Business"
              type="text"
              name="name_of_business"
            />
            <Input
              label="Email"
              placeholder="Enter your Email"
              type="email"
              name="email"
            />

            <div className={classes.submitButton}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
      <div className={classes.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.96561115059!2d77.32372157449184!3d8.206212701326374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f970b1f3edb3%3A0x1144015129422458!2sState%20Bank%20of%20India%20KANDANVILAI!5e0!3m2!1sen!2sin!4v1732351966282!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
