import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    reason: "", // Set initial reason to an empty string to prevent form submission
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.reason) {
      alert("Please select a reason for contacting us.");
      return; // Prevent submission if no reason is selected
    }

    emailjs
      .send(
        "service_8uljq6m",       // Replace with your EmailJS service ID
        "template_78xwsgu",      // Replace with your EmailJS template ID
        formData,
        "9v7frkj4uMmaMblc9"      // Replace with your EmailJS public key
      )
      .then(() => {
        alert("Message sent successfully! Thank you for reaching out ACDM. We will get back to you as soon as possible");
        setFormData({ name: "", email: "", message: "", reason: "" });
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <form onSubmit={handleSubmit} id="contact" className="max-w-md mx-auto mt-10 py-28">
        <h2 className="text-5xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 ">
          Contact{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Us
          </span>
        </h2>

      <label className="block mb-2">
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block mb-2">
        Reason for Contact
        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        >
          <option value="" disabled>Choose an option</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Support">Careers</option>
          <option value="Feedback">Partnership</option>
          <option value="Other">Projects</option>
        </select>
      </label>

      <label className="block mb-2">
        Message
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </label>

      <button type="submit" className="mt-4 p-2 py-2 px-10 bg-orange-800 text-white rounded">
        Send
      </button>
    </form>
  );
};

export default ContactUs;
