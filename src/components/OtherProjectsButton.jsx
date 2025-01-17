import { Link } from "react-router-dom";
import UiverseButton from "./UIVerseButton";

const OtherProjectsButton = () => {
  return (
    <div className="flex justify-end mt-32">
      <Link>
        <UiverseButton className="animate-bounce" name={"Other Projects"} />
      </Link>
    </div>
  );
};

export default OtherProjectsButton;
