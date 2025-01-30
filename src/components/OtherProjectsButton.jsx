import { Link } from "react-router-dom";
import NextButton from "./Buttons/NextButton";
import { usePage } from "../context/PageContext";

const OtherProjectsButton = () => {
  const { handlePage } = usePage();

  const handleClick = () => {
    handlePage();
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex lg:justify-end mt-28 pb-12 px-12 w-full justify-center">
      <Link to="/Other-Projects" onClick={handleClick}>
        <NextButton title={"Other Projects"} />
      </Link>
    </div>
  );
};

export default OtherProjectsButton;
