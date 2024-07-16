import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { IoSearch } from "react-icons/io5";
import { Metadata, Product } from "@/lib/types";
import { SkeletonCard } from "./skeleton-card";
import { ProductCard } from "./product-card";

type ProductListParams = {
  products: Product[];
  metadata: Metadata;
  isLoading: boolean;
};

export const ProductList = ({
  products,
  metadata,
  isLoading,
}: ProductListParams) => {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const hanldeViewMore = () => {
    console.log("pagination");
  };

  return (
    <section className="md:my-20 my-14">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link to="/home">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="uppercase">
              All collection
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h2 className="mt-10 font-bold font-poppins text-4xl text-b-black uppercase">
        All collection
      </h2>

      {/* Search product */}
      <div className="mt-8 flex justify-between items-center">
        <p className="font-poppins font-semibold text-lg uppercase">
          {`Results: ${metadata.totalData} ${
            !metadata.totalData ? "item" : "items"
          }`}
        </p>
        <form
          onSubmit={handleSearch}
          className="flex w-full max-w-sm items-center space-x-1"
        >
          <Input
            type="text"
            placeholder="Search by collection name"
            className="font-plus focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
            disabled={isLoading}
          />
          <Button type="submit" variant="outline">
            <IoSearch />
          </Button>
        </form>
      </div>

      {/* Product list */}
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
                className="w-full my-6 border-black rounded-none uppercase font-plus"
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
