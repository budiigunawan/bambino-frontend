import { Skeleton } from "../ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="lg:col-span-3 md:col-span-4 col-span-6">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[188px]" />
        <div className="space-y-2">
          <Skeleton className="h-4" />
          <Skeleton className="h-4" />
        </div>
      </div>
    </div>
  );
};
