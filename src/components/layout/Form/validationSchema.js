import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  clientName: Yup.string().min(4, "Password is required"),
});
