import React, { useContext, createContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusHeadline, setStatusHeadline] = useState("");

  return (
    <ModalContext.Provider
      value={{
        statusMessage,
        setStatusMessage,
        statusHeadline,
        setStatusHeadline,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
