import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { Product } from "@/lib/types";
import { Skeleton } from "../ui/skeleton";
import { rupiahFormat } from "@/lib/helpers";
import { Button } from "../ui/button";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { DetailAccordion } from "./detail-accordion";
import { Input } from "../ui/input";
import { useState } from "react";

type DetailParams = {
  product: Product;
  isLoading: boolean;
};

export const Detail = ({ product, isLoading }: DetailParams) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handlePlus = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const handleMinus = () => {
    setQuantity((quantity) => quantity - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleBlur = () => {
    if (!quantity) {
      setQuantity(1);
    }
  };

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
            <Link className="uppercase underline" to="/products">
              All collection
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-plus">
              {product?.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="my-10 grid gap-x-4 gap-y-6 grid-cols-12">
        {isLoading ? (
          <Skeleton className="h-[188px] xl:h-[556px] lg:h-[440px] md:h-[328px] col-span-12 md:col-span-6" />
        ) : (
          <img
            src={product?.imageUrl}
            alt={product?.slug}
            className="col-span-12 lg:col-span-6"
          />
        )}

        <section className="col-span-12 lg:col-start-8 lg:col-end-13">
          {isLoading ? (
            <>
              <div className="space-y-1">
                <Skeleton className="h-10" />
                <Skeleton className="h-10" />
              </div>
              <Skeleton className="mt-6 h-9" />
              <Skeleton className="mt-10 h-40" />
              <Skeleton className="mt-10 h-20" />
            </>
          ) : (
            <>
              <section>
                <h2 className="font-bold font-poppins text-2xl md:text-4xl text-b-black">
                  {product?.name}
                </h2>
                <p className="mt-6 font-semibold font-poppins text-2xl md:text-3xl text-b-black">
                  {rupiahFormat(product.price)}
                </p>
              </section>
              <section className="mt-10">
                <p className="md:text-lg font-poppins uppercase">Quantity</p>
                <div className="mt-4 flex w-1/2 items-center space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleMinus}
                    disabled={quantity === 1}
                  >
                    -
                  </Button>
                  <Input
                    className="text-center"
                    type="number"
                    min={1}
                    max={product?.stock}
                    value={quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePlus}
                    disabled={quantity === product?.stock}
                  >
                    +
                  </Button>
                </div>
                <Button className="mt-8 rounded-none h-12 w-full uppercase bg-b-pink-dark hover:bg-b-pink-light">
                  Add to cart
                </Button>
              </section>
              <section className="mt-10">
                <p className="text-lg md:text-xl font-poppins uppercase">
                  Share
                </p>
                <ul className="flex gap-2 mt-3 text-5xl">
                  <li>
                    <a
                      href={`https://twitter.com/share?url=https://bambino.budigunawan.com/products/${product.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareXTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`http://facebook.com/share.php?u=https://bambino.budigunawan.com/products/${product.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareFacebook />
                    </a>
                  </li>
                </ul>
              </section>
            </>
          )}
        </section>

        <section className="col-span-12 lg:col-span-6">
          {isLoading ? (
            <div className="space-y-1">
              <Skeleton className="h-8" />
              <Skeleton className="h-8" />
            </div>
          ) : (
            <DetailAccordion
              overview={product?.overview}
              materials={product?.materials}
            />
          )}
        </section>
      </section>
    </section>
  );
};
