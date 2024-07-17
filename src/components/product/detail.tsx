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

type DetailParams = {
  product: Product;
  isLoading: boolean;
};

export const Detail = ({ product, isLoading }: DetailParams) => {
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
            className="col-span-12 md:col-span-6"
          />
        )}

        <section className="col-span-12 md:col-start-8 md:col-end-13">
          {isLoading ? (
            <p>loading...</p>
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
                <p className="text-lg md:text-xl font-poppins uppercase">
                  Quantity
                </p>
                <div className="mt-4 bg-gray-300 h-11 w-2/5" />
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
                      href={`https://twitter.com/share?url=https://bambino.budigunawan.com/products/${product.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareXTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`http://facebook.com/share.php?u=https://bambino.budigunawan.com/products/${product.id}`}
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

        <section className="col-span-12 md:col-span-6">
          <DetailAccordion
            overview={product?.overview}
            materials={product?.materials}
          />
        </section>
      </section>
    </section>
  );
};