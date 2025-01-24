import React, { useState } from "react";
import Squares from "./Squares";
import { useTheme } from "../context/Theme";
import { useModal } from "../context/ModalContext";
import sendEmail from "../api/Email";
import Modal from "./Modal";

const Contact = () => {
  const { theme } = useTheme();
  const { statusMessage, setStatusMessage, statusHeadline, setStatusHeadline } =
    useModal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation

    if (!formData.name.trim()) {
      setStatusMessage("Name is required.");
      setStatusHeadline("Name");
      return;
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setStatusMessage("Please enter a valid email address.");
      setStatusHeadline("E-mail Address");
      return;
    }

    if (!formData.message.trim()) {
      setStatusMessage("Message cannot be empty.");
      setStatusHeadline("Message");
      return;
    }

    // try catch for EmailJS

    try {
      const response = await sendEmail(formData);

      setStatusHeadline("Cheers!");
      setStatusMessage(
        `Thank you ${formData.name}! I'll get back to you as soon as possible!`
      );

      // reset
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusHeadline("Error ❌");
      setStatusMessage(`Error sending.. ${error}`);
    }
  };

  return (
    <>
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
              maxLength="280"
              className="border-2 bg-gray-200 rounded p-5 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-rose-500 hover:bg-rose-600 text-white p-2 rounded-md mt-2 m-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {statusMessage && (
        <Modal
          headline={statusHeadline}
          statusMessage={statusMessage}
          message={() => {
            setStatusMessage("");
            setStatusHeadline("");
          }}
        />
      )}
    </>
  );
};

export default Contact;
