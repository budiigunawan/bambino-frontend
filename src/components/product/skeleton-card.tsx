import { Skeleton } from "../ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3 lg:col-span-3 md:col-span-4 col-span-6">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
