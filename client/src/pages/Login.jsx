import { Form, Link, redirect} from "react-router-dom";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import chair from "../assets/chair2.png"

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/login/", data);
      store.dispatch(loginUser(response.data));
      const { role } = response.data.user;
      console.log(response.data.user);

      console.log(role);

      // Store token (e.g., in local storage or context)

      toast.success("logged in successfully");
      // Check the role of the user and redirect accordingly
      if (role === "admin") {
        return redirect("/dashboard");
      } else {
        return redirect("/");
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  return (
    <section className="h-screen grid grid-cols-2 place-items-center">
      <div className="bg-[#F3F5F7] relative h-full w-full flex justify-center items-center">
        <h1 className="absolute top-2 right-1/2 font-semibold text-slate-950 text-lg">
          3legant
        </h1>
        <img src={chair} className="object-cover" />
      </div>
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100  flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <p className="text-center">
          Don't have an account?
          <Link
            to="/register"
            className="ml-2 link link-hover link-success capitalize"
          >
            Sign Up
          </Link>
        </p>
        <FormInput
          type="email"
          label="Your Email address"
          name="email"
          defaultValue="nikxx@gmail.com"
        />
        <FormInput type="password" label="Password" name="password" />
        <div className="mt-4">
          <SubmitBtn text="Sign In" />
        </div>
      </Form>
    </section>
  );
};

export default Login;
