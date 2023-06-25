import * as Yup from "yup";

export const addressSchema = Yup.object().shape({
  country: Yup.string().required("Country is required."),
  city: Yup.string().required("City is required."),
  postalCode: Yup.string().optional(),
});
