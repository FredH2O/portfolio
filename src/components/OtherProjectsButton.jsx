import { Link } from "react-router-dom";
import NextButton from "./Buttons/NextButton";
import { usePage } from "../context/PageContext";

const OtherProjectsButton = () => {
  const { handlePage } = usePage();

  return (
    <div className="flex md:justify-end mt-28 pb-12 px-12 w-full justify-center">
      <Link to="/Other-Projects" onClick={handlePage}>
        <NextButton title={"Other Projects"} />
      </Link>
    </div>
  );
};

export default OtherProjectsButton;
