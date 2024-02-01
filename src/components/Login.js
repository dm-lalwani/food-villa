import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  function handleRedirect(values) {
    alert(values);
    setTimeout(() => {
      navigate("/");
    }, 0);
  }
  return (
    <>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Password must be minimun 8 characters")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleRedirect(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Username"
            name="userName"
            placeholder="DMLalwani"
          />
          <MyTextInput
            label="Email-Id"
            name="email"
            placeholder="abc@gmail.com"
          />
          <MyTextInput label="Password" name="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
