import { Field } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PropTypes from "prop-types";

const PasswordField = ({ value, onChange, id, onBlur, name, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="h-[34px] w-full px-4 py-3 rounded-lg border border-solid border-[#E1E3E6] bg-[#FFFFFF]
     flex flex-row items-center justify-between"
    >
      <Field
        id={id}
        name={name}
        type={isVisible ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full outline-none"
      />
      {value && (
        <div
          className="ml-3 cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? (
            <EyeSlashIcon width={24} height={24} />
          ) : (
            <EyeIcon width={24} height={24} />
          )}
        </div>
      )}
    </div>
  );
};

PasswordField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default PasswordField;
