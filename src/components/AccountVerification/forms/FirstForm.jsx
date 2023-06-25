import { ErrorMessage, Field, Form, Formik } from "formik";
import PasswordField from "../../../common/PasswordField";
import FormButton from "../../../common/FormButton";
import { registrationSchema } from "../../../schemas/registrationSchema";
import PropTypes from "prop-types";

const FirstForm = ({ nextStep }) => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      isInitialValid={false}
      validationSchema={registrationSchema}
      onSubmit={nextStep}
    >
      {({ values, handleChange, handleBlur }) => {
        return (
          <Form className="w-full max-w-[410px] flex flex-col gap-4">
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="fullname"
                className="w-full text-start text-[#404D61] text-[18px] font-medium leading-6"
              >
                Full Name
              </label>
              <div className="w-full flex flex-col">
                <Field
                  id="fullname"
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="h-[34px] w-full px-4 py-3 rounded-lg border border-solid border-[#E1E3E6] bg-[#FFFFFF] outline-none"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div className="w-full h-5">
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-600 text-sm px-4 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="email"
                className="w-full text-start text-[#404D61] text-[18px] font-medium leading-6"
              >
                Email
              </label>
              <div className="w-full flex flex-col">
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="h-[34px] w-full px-4 py-3 rounded-lg border border-solid border-[#E1E3E6] bg-[#FFFFFF]  outline-none"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <div className="w-full h-5">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm px-4 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="password"
                className="w-full text-start text-[#404D61] text-[18px] font-medium leading-6"
              >
                Password
              </label>
              <div className="w-full flex flex-col">
                <PasswordField
                  id={"password"}
                  name={"password"}
                  placeholder={"Password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="w-full h-5">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm px-4 w-full"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <PasswordField
                  id={"passwordConfirm"}
                  name={"passwordConfirm"}
                  placeholder={"Password Confirm"}
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="w-full h-5">
                  <ErrorMessage
                    name="passwordConfirm"
                    component="div"
                    className="text-red-600 text-sm px-4 w-full"
                  />
                </div>
              </div>
            </div>
            <FormButton type={"submit"} label={"Continue"} />
          </Form>
        );
      }}
    </Formik>
  );
};

FirstForm.propTypes = {
  nextStep: PropTypes.func,
};

export default FirstForm;
