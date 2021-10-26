import React, { useState } from "react";
import ContactBanner from "../assets/svc_contact_banner.jpg";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/propr1/airtable/DeuyQhQBTeEiuBvY?tableName=SVC_Contact",
        {
          method: "post",
          body: JSON.stringify([formData]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      setMessage("Success");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error");
    }
  };

  document.title = "Sonic Vape Club | Contact";

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactBanner})` }}
      ></div>

      <div className="rightSide">
        <h1>Request Whitelist Access</h1>

        <form id="contact-form" name="contact" required onSubmit={sendData}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Name"
            type="text"
            required
            onChange={handleInput}
          />
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            placeholder="Enter email address"
            type="email"
            required
            onChange={handleInput}
          />
          <label htmlFor="message">Wallet Address</label>
          <textarea
            rows="6"
            placeholder="Provide your wallet address to get added to whitelist."
            name="message"
            onChange={handleInput}
          ></textarea>
          <button name="submit" type="submit" value="Send">
            Send
          </button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
