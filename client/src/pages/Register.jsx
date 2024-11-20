import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import chair from "../assets/chair2.png"

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <section className="h-screen grid grid-cols-2 place-items-center">
      <div className="bg-[#F3F5F7] relative h-full w-full flex justify-center items-center">
        <h1 className="absolute top-2 right-1/2 font-semibold text-slate-950 text-lg">3legant</h1>
        <img src={chair} className="object-cover"/>
      </div>
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100  flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Sign Up</h4>
        <p className="text-center">
          Already a member ?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Sign In
          </Link>
        </p>
        <FormInput type="text" label="your name" name="name" defaultValue="nik" />
        <FormInput
          type="email"
          label="Your email"
          name="email"
          defaultValue="nik@gmail.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
      </Form>
    </section>
  );
};
export default Register;
