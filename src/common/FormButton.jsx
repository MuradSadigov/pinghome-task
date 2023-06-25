import ArrowRightIcon from "../assets/arrow-right.svg";
import PropTypes from "prop-types";

const FormButton = ({ onClick, type, label, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full flex flex-row items-center gap-1 justify-center rounded-md py-1 ${
        disabled ? "bg-[#4a3aff84]" : "bg-[#4A3AFF]"
      }`}
    >
      <span className="text-white text-[16px] leading-6">{label}</span>
      <img src={ArrowRightIcon} alt="Button SVG" className="w-4 h-4" />
    </button>
  );
};

FormButton.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default FormButton;
