import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const initialvalues = {
  fullname: "",
  email: "",
  password: "",
  confirm_password: "",
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = ({setLogin}) => {

  const navigate = useNavigate();


  // const Validation = (values) => {
  //   const errors = {};

  //   if (!values.fullname) {
  //     errors.fullname = "Required";
  //   }
  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //     errors.email = "Invalid email address";
  //   }

  //   if (!values.password) {
  //     errors.password = "Required";
  //   } else if (values.password.length < 8) {
  //     errors.password = "Password must be at least 8 characters long";
  //   }

  //   if (!values.confirm_password) {
  //     errors.confirm_password = "Required";
  //   } else if (values.confirm_password !== values.password) {
  //     errors.confirm_password = "Passwords must match";
  //   }

  //   return errors;
  // };

  const HandleSubmit = (val) => {
    localStorage.setItem("UserData", JSON.stringify(val));
    // setLogin('login')
    navigate("/login")

  };

  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>

            <Formik
              initialValues={initialvalues}
              onSubmit={HandleSubmit}
              // validate={Validation}
              validationSchema={validationSchema}
            >
              <Form>
                <Field
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fullname"
                  placeholder="Full Name"
                />
                <ErrorMessage name="fullname" component="p" className="error" />

                <Field
                  type="email"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email" component="p" className="error" />

                <Field
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" component="p" className="error" />
                <Field
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Confirm Password"
                />
                <ErrorMessage
                  name="confirm_password"
                  component="p"
                  className="error"
                />

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-600 text-white  hover:bg-green-800 focus:outline-none my-1"
                >
                  Create Account
                </button>
              </Form>
            </Formik>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/login"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
