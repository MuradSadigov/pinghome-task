import CheckIcon from "../assets/Icon.svg";
import PropTypes from "prop-types";

const ProgressMark = ({ step, i, formTitle }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-4">
      <div
        className={`relative flex justify-center items-center p-1 rounded-full max-w-[26px] max-h-[26px] ${
          i === step ? "bg-[#4A3AFF]" : "bg-[#4ADE80]"
        } ${i > step ? "bg-white" : ""}`}
      >
        {i < step ? (
          <img src={CheckIcon} alt="Check SVG" />
        ) : (
          <span
            className={`${
              i === step ? "text-white" : "text-black"
            } text-center text-[14px] font-medium leading-[18px] w-[17px] h-[17px]`}
          >
            {i + 1}
          </span>
        )}
        <p className="hidden sm:block absolute top-0 left-14 text-black leading-6 font-medium text-[16px] text-start min-w-[100px]">
          {formTitle}
        </p>
      </div>
    </div>
  );
};

ProgressMark.propTypes = {
  step: PropTypes.number,
  i: PropTypes.number,
  formTitle: PropTypes.string,
};
export default ProgressMark;
