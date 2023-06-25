import CheckIcon from "../../assets/Icon.svg";

const SuccessCard = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 rounded-lg gap-5">
      <h1 className="text-black font-medium">Successfully registered!</h1>
      <div className="bg-[#4ADE80] rounded-full h-10 w-10 flex justify-center items-center">
        <img src={CheckIcon} alt="Check SVG" className="w-6" />
      </div>
    </div>
  );
};

export default SuccessCard;
