import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePage } from "../context/PageContext";

const usePageUpdate = () => {
  const { setPage } = usePage();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setPage(false);
    } else {
      setPage(true);
    }
  }, [location, setPage]);
};

export default usePageUpdate;
