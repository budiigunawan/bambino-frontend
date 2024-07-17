import { ProductCard } from "../product/product-card";
import { Product } from "@/lib/types";
import { SkeletonCard } from "../product/skeleton-card";

type RecommendationParams = {
  products: Product[];
  isLoading: boolean;
  page: string;
};

export const Recommendation = ({
  products,
  isLoading,
  page,
}: RecommendationParams) => {
  return (
    <section className="p-4 md:p-0 mb-20">
      <h2 className="font-bold font-poppins text-4xl text-b-black text-center uppercase">
        {page === "details" ? "People also viewed" : "People also bought"}
      </h2>
      {isLoading ? (
        <div className="my-10">
          <div className="grid gap-x-4 gap-y-8 grid-cols-12">
            {[...Array(8)].map((_e, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className="my-10">
          {products?.length === 0 && <h3>Collection is empty</h3>}
          {products?.length > 0 && (
            <div className="grid gap-x-4 gap-y-8 grid-cols-12">
              {products?.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
