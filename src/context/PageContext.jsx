import { createContext, useContext, useState } from "react";
// use this to navigate between pages !!
const PageContext = createContext();

export const usePage = () => {
  return useContext(PageContext);
};

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(false);

  const handlePage = () => {
    setPage((prev) => !prev);
  };

  return (
    <PageContext.Provider value={{ page, handlePage, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
