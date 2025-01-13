import React, { useContext, useState } from "react";
import Squares from "./Squares";
import { Theme } from "../context/Theme";
import sendEmail from "../api/Email";

const Contact = () => {
  const { theme } = useContext(Theme);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(statusMessage);

    try {
      const response = await sendEmail(formData);

      setStatusMessage("Message sent !");

      // reset
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusMessage(`Error sending..${error}`);
    }
  };

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <div className="absolute inset-0 dark:bg-black bg-slate-700 opacity-80"></div>
      <Squares
        speed={0.1}
        squareSize={30}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor={theme === "dark" ? "#475569" : "grey"}
        hoverFillColor="#F43F5E"
      />

      <div className="z-10 text-white w-auto flex flex-col justify-center items-center py-16 container">
        <h2 className="text-4xl uppercase font-bold">Contact</h2>
        <p>Feel free to contact me by submitting below!</p>
      </div>

      <div className="z-10 max-w-screen-sm w-[95%] bg-white rounded container p-5 xl:w-1/3 mb-10">
        <form
          onSubmit={handleSubmit}
          className="gap-2 flex flex-col container m-auto"
        >
          {/* name */}
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 bg-gray-200 h-[50px] rounded p-5"
            required
          />

          {/* email */}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 bg-gray-200 h-[50px] rounded p-5"
            required
          />

          {/* message */}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            maxLength="500"
            className="border-2 bg-gray-200 rounded p-5"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded mt-4"
          >
            Submit
          </button>
        </form>

        {statusMessage && <p className="mt-4 text-center">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
