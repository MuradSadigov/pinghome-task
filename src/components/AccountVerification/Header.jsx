import ArrowLeftIcon from "../../assets/arrow-left.svg";
import PropTypes from "prop-types";

const Header = ({ goBack }) => {
  return (
    <header
      className="flex items-center px-3 w-full border-b-[1px] border-b-[#ECEEEB] py-5 md:px-20 md:justify-start"
    >
      <div className="flex flex-row justify-between  items-center w-full md:gap-5 md:w-fit">
        <button
          onClick={goBack}
          className="flex justify-center items-center px-5 py-3 rounded-[99px] bg-[#F8F8F8]"
        >
          <img
            src={ArrowLeftIcon}
            alt="Button Svg"
            className="min-w-[24px] min-h-[24px]"
          />
        </button>
        <h1 className="text-black text-[16px] font-medium leading-10 text-center">
          Account verification
        </h1>
        <div className="flex items-center justify-center py-[1px] px-[6px] rounded h-[18px] bg-[#5552D914]">
          <p className="text-[#6F6FFF] text-center text-[12px] leading-6 ">
            In progress
          </p>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  goBack: PropTypes.func,
};

export default Header;
