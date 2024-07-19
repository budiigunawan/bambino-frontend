import { Form, Link, useSearchParams } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
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
import { useMemo, useState } from "react";

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
  const [limit, setLimit] = useState(10);
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("q");

  const handleViewMore = () => {
    setLimit((limit) => limit + 10);
  };

  const isDisableViewMore = useMemo(
    () => products.length === metadata.totalData,
    [products, metadata]
  );

  return (
    <section className="md:my-20 my-14 p-4 md:p-0">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link className="uppercase underline" to="/home">
              Home
            </Link>
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
      <div className="mt-8 flex justify-between items-center space-x-4">
        <p className="font-poppins font-semibold text-lg uppercase">
          {`Results: ${metadata.totalData} ${
            !metadata.totalData ? "item" : "items"
          }`}
        </p>
        <Form
          method="get"
          action="/products"
          className="flex w-full max-w-sm items-center space-x-1"
        >
          <Input
            type="text"
            name="q"
            placeholder="Search by collection name"
            className="font-plus focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
            disabled={isLoading}
            defaultValue={querySearch ?? undefined}
          />
          <Button type="submit" variant="outline">
            <IoSearch />
          </Button>
        </Form>
      </div>

      {/* Product list */}
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
            <>
              <div className="grid gap-x-4 gap-y-8 grid-cols-12">
                {products?.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
              <Form method="get" action="/products">
                <input
                  name="limit"
                  type="number"
                  className="hidden"
                  defaultValue={limit}
                />
                <Button
                  className="w-full my-6 border-black rounded-none uppercase font-plus"
                  variant="outline"
                  type="submit"
                  onClick={handleViewMore}
                  disabled={isDisableViewMore}
                >
                  View more
                </Button>
              </Form>
            </>
          )}
        </div>
      )}
    </section>
  );
};
