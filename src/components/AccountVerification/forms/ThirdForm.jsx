import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import FormButton from "../../../common/FormButton";
import { agreement, agreementSchema } from "../../../schemas/agreementSchema";
import PropTypes from "prop-types";

const ThirdForm = ({ formikRef, nextStep }) => {
  const textareaRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  const handleTextareaScroll = () => {
    const textarea = textareaRef.current;
    const isScrolledToBottom =
      textarea.scrollTop + textarea.clientHeight >= textarea.scrollHeight - 1;
    return isScrolledToBottom;
  };

  return (
    <Formik
      innerRef={formikRef}
      isInitialValid={false}
      validationSchema={agreementSchema}
      initialValues={{
        agreeToTerms: false,
        agreement: agreement,
      }}
      onSubmit={nextStep}
      onReset={() => {
        textareaRef.current.scrollTop = 0;
      }}
    >
      {({ values, handleChange }) => {
        return (
          <Form className="w-full max-w-[410px] flex flex-col gap-4">
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="agreement"
                className="w-full text-start text-[#404D61] text-[18px] font-medium leading-6"
              >
                Agreement
              </label>
              <div className="w-full flex flex-col">
                <Field
                  id="agreement"
                  as="textarea"
                  name="agreement"
                  disabled={true}
                  innerRef={textareaRef}
                  onScroll={() => {
                    if (!scrolled) {
                      setScrolled(handleTextareaScroll());
                    }
                  }}
                  className="h-[350px] w-full px-4 rounded-lg border border-solid border-[#E1E3E6] bg-[#FFFFFF]
                   outline-none resize-none overflow-y-auto overflow-x-hidden"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-start">
                <label className="flex flex-row items-center">
                  <Field
                    type="checkbox"
                    name="agreeToTerms"
                    disabled={!scrolled}
                    checked={values.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 mx-2 rounded-lg border border-solid border-[#E1E3E6] bg-[#FFFFFF]  outline-none"
                  />{" "}
                  {"I agree to the terms and conditions"}
                </label>
                <div className="w-full h-5">
                  <ErrorMessage
                    name="agreeToTerms"
                    component="div"
                    className="text-red-600 text-sm px-2 w-full"
                  />
                </div>
              </div>
              <FormButton type="submit" label="Submit" />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

ThirdForm.propTypes = {
  formikRef: PropTypes.any,
  nextStep: PropTypes.func,
};

export default ThirdForm;
