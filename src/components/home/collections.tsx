import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ProductCard } from "../product/product-card";
import { Product } from "@/lib/types";
import { SkeletonCard } from "../product/skeleton-card";

type CollectionsParams = {
  products: Product[];
  isLoading: boolean;
};

export const Collections = ({ products, isLoading }: CollectionsParams) => {
  const navigate = useNavigate();

  const hanldeViewMore = () => {
    navigate("/products");
  };

  return (
    <section>
      <h2 className="font-bold font-poppins text-4xl text-b-black text-center uppercase">
        Collection
      </h2>
      {isLoading ? (
        <div className="my-10 p-4 md:p-0">
          <div className="grid gap-x-4 gap-y-8 grid-cols-12">
            {[...Array(8)].map((_e, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className="my-10 p-4 md:p-0">
          {products?.length === 0 && <h3>Collection is empty</h3>}
          {products?.length > 0 && (
            <>
              <div className="grid gap-x-4 gap-y-8 grid-cols-12">
                {products?.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
              <Button
                className="w-full my-6 border-black rounded-none uppercase"
                variant="outline"
                onClick={hanldeViewMore}
              >
                View more
              </Button>
            </>
          )}
        </div>
      )}
    </section>
  );
};
