import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export const Detail = () => {
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
            <BreadcrumbPage className="uppercase">Product name</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="my-10 grid gap-x-4 gap-y-6 grid-cols-12">
        <section className="h-[188px] md:h-[453px] bg-orange-300 col-span-12 md:col-span-6" />
        <section className="h-[188px] md:h-[453px] bg-blue-400 col-span-12 md:col-start-8 md:col-end-13" />
        <section className="h-[188px] md:h-[453px] bg-gray-500 col-span-12 md:col-span-6" />
      </section>
    </section>
  );
};
