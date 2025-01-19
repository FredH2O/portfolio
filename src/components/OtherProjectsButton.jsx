import { Link } from "react-router-dom";
import NextButton from "./Buttons/NextButton";

const OtherProjectsButton = () => {
  return (
    <div className="flex md:justify-end mt-28 pb-12 px-12 w-full justify-center">
      <Link>
        <NextButton title={"Other Projects"} />
      </Link>
    </div>
  );
};

export default OtherProjectsButton;
