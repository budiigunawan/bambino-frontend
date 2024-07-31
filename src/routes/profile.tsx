import { getProfile } from "@/api/user-api";
import { ProfileForm } from "@/components/profile/profile-form";
import { authCookie } from "@/lib/auth";
import { User } from "@/lib/types";
import { useLoaderData } from "react-router-dom";

async function loader() {
  const token: string = authCookie.get("token");

  const response = await getProfile(token);
  return {
    userProfile: response.user,
  };
}

export const Profile = () => {
  const userProfile = useLoaderData() as User;

  return <ProfileForm userData={userProfile} />;
};

Profile.loader = loader;
