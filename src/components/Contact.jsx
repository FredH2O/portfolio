import React, { useContext } from "react";
import Squares from "./Squares";
import { Theme } from "../context/Theme";

const Contact = () => {
  const { theme } = useContext(Theme);

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
        <form action="" className="gap-2 flex flex-col container m-auto">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border-2 bg-gray-200 h-[50px] rounded p-5"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="border-2 bg-gray-200 h-[50px] rounded p-5"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            maxLength="500"
            className="border-2 bg-gray-200 rounded p-5"
            suppressContentEditableWarning
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
