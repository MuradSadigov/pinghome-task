import ProgressMark from "../../common/ProgressMark";
import PropTypes from "prop-types";

const ProgressBar = ({ currentStep, forms }) => {
  return (
    <div className="h-full w-[200px] min-w-fit max-sm:w-full max-sm:h-fit max-sm:max-w-[410px] max-sm:mx-auto">
      <div className="w-full sm:h-fit gap-10 sm:w-8 p-1 flex sm:flex-col justify-between items-center rounded-[100px] bg-[#D9D9D970]">
        {forms &&
          forms.slice(0,-1).map((item, i) => (
            <ProgressMark key={i} i={i} formTitle={item.title} step={currentStep} />
          ))}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  forms: PropTypes.array,
  currentStep: PropTypes.number,
};

export default ProgressBar;
