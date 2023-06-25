import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import FormButton from "../../../common/FormButton";
import { addressSchema } from "../../../schemas/addressSchema";
import PropTypes from "prop-types";

const SecondForm = ({ formikRef, nextStep }) => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      await fetch("https://countriesnow.space/api/v0.1/countries")
        .then((res) => res.json())
        .then((data) => {
          setCountries(data?.data);
        });
    }
    fetchCountries();
  }, []);

  return (
    <Formik
      initialValues={{ country: "", city: "", postalCode: "" }}
      validationSchema={addressSchema}
      isInitialValid={false}
      onSubmit={nextStep}
      innerRef={formikRef}
    >
      {({ values, handleChange, handleBlur }) => {
        return (
          <Form className="w-full max-w-[410px] flex flex-col gap-4">
            <div className="w-full flex flex-col gap-4">
              <label
                htmlFor="country"
                className="w-full text-start text-[#404D61] text-[18px] font-medium leading-6"
              >
                Address
              </label>
              <div className="w-full flex flex-col">
                <Field
                  as="select"
                  id="country"
                  name="country"
                  onChange={(e) => {
                    handleChange(e);
                    setCities(
                      countries.find((i) => i.country === e.target.value)
                        ?.cities
                    );
                  }}
                  onBlur={handleBlur}
                  value={values.country}
                  className="h-[34px] w-full px-4 rounded-lg border border-solid border-[#E1E3E6] bg-[#FFFFFF] outline-none"
                >
                  <option value="">Country</option>
                  {countries.map((item, i) => (
                    <option key={i} value={item.country}>
                      {item?.country}
                    </option>
                  ))}
                </Field>
                <div className="w-full h-5">
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-600 text-sm px-4 w-full"
                  />
                </div>
              </div>
              {/*  */}
              <div className="w-full flex flex-col">
                <Field
                  as="select"
                  id="city"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={!values.country}
                  value={values.city}
                  className="h-[34px] w-full px-4 rounded-lg border border-solid border-[#E1E3E6] bg-[#FFFFFF] outline-none"
                >
                  <option value="">City</option>
                  {cities?.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </Field>
                <div className="w-full h-5">
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-600 text-sm px-4 w-full"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col">
                <Field
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  placeholder="Postal code (optional)"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.postalCode}
                  className="h-[34px] w-full px-4 rounded-lg border border-solid border-[#E1E3E6] bg-[#FFFFFF] outline-none"
                />
              </div>
            </div>
            <FormButton type={"submit"} label={"Continue"} />
          </Form>
        );
      }}
    </Formik>
  );
};

SecondForm.propTypes = {
  formikRef: PropTypes.any,
  nextStep: PropTypes.func,
};

export default SecondForm;
