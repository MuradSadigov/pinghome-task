import { useRef, useState } from "react";
import Header from "./components/AccountVerification/Header";
import ProgressBar from "./components/AccountVerification/ProgressBar";
import ThirdForm from "./components/AccountVerification/forms/ThirdForm";
import FirstForm from "./components/AccountVerification/forms/FirstForm";
import SecondForm from "./components/AccountVerification/forms/SecondForm";
import SuccessCard from "./components/AccountVerification/SuccessCard";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const secondFormik = useRef(null);
  const thirdFormik = useRef(null);

  function nextStep() {
    if (currentStep < forms.length - 1)
      setCurrentStep((prevState) => prevState + 1);
  }

  function previousStep(formik) {
    setCurrentStep((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    if (formik) formik.current?.resetForm();
  }
  const forms = [
    {
      title: "Representative",
      mainForm: <FirstForm nextStep={nextStep} />,
      prevStep: previousStep,
    },
    {
      title: "Address",
      mainForm: <SecondForm formikRef={secondFormik} nextStep={nextStep} />,
      prevStep: () => previousStep(secondFormik),
    },
    {
      title: "Agreement",
      mainForm: <ThirdForm formikRef={thirdFormik} nextStep={nextStep} />,
      prevStep: () => previousStep(thirdFormik),
    },
    {
      mainForm: <SuccessCard />,
      prevStep: null,
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col">
      
      <Header goBack={forms[currentStep].prevStep} isCompleted={currentStep === forms.length - 1} />
      <div className="relative w-full p-5 h-full flex justify-start lg:flex-row max-sm:flex-col">
        {currentStep !== forms.length - 1 && (
          <ProgressBar
            forms={forms}
            currentStep={currentStep}
          />
        )}
        <div className="w-full flex mt-2 md:mt-0 flex-col items-center">
          {forms.map((item, i) => (
            <div
              key={i}
              className={`${
                currentStep === i ? "w-full max-w-[410px] " : "hidden"
              }`}
            >
              {item.mainForm}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
