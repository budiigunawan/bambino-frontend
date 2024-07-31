import { login } from "@/api/auth-api";
import { LoginForm } from "@/components/login/login-form";
import { authCookie } from "@/lib/auth";
import { ActionFunctionArgs, redirect } from "react-router-dom";

async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const userData = {
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const loginResponse: any = await login(userData);

  if (loginResponse.code !== 201) {
    return null;
  }

  const token = loginResponse.token;

  authCookie.set("token", token);

  return redirect("/home");
}

export const Login = () => {
  return <LoginForm />;
};

Login.action = action;
