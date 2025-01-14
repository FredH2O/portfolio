import React, { useContext, createContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [statusMessage, setStatusMessage] = useState("");
  return (
    <ModalContext.Provider value={{ statusMessage, setStatusMessage }}>
      {children}
    </ModalContext.Provider>
  );
};
