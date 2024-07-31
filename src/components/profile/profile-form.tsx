import { User } from "@/lib/types";

type ProfileFormParams = {
  userData: User;
};

export const ProfileForm = ({ userData }: ProfileFormParams) => {
  return (
    <section className="md:my-20 my-14 p-4 md:p-0">
      {JSON.stringify(userData)}
    </section>
  );
};
