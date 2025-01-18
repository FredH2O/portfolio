import { Link } from "react-router-dom";
import NextButton from "./Buttons/NextButton";

const OtherProjectsButton = () => {
  return (
    <div className="flex justify-end mt-32">
      <Link>
        <NextButton title={"Other Projects"} />
      </Link>
    </div>
  );
};

export default OtherProjectsButton;
