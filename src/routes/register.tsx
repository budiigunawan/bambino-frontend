import { register } from "@/api/auth-api";
import { RegisterForm } from "@/components/register/register-form";
import { ActionFunctionArgs, redirect } from "react-router-dom";

async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const userData = {
    username: formData.get("username")?.toString(),
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const registerResponse: any = await register(userData);

  if (registerResponse.code !== 201) {
    return null;
  }

  return redirect("/login");
}

export const Register = () => {
  return <RegisterForm />;
};

Register.action = action;
