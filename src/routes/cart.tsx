import { getCart } from "@/api/checkout-api";
import { CartBreadcrumb } from "@/components/cart/cart-breadcrumb";
import { OrderSummary } from "@/components/cart/order-summary";
import { ShoppingCart } from "@/components/cart/shopping-cart";
import { authCookie } from "@/lib/auth";
import { Cart as CartType } from "@/lib/types";
import { useLoaderData } from "react-router-dom";
// import { Recommendation } from "@/components/product/recommendation";

async function loader() {
  const token: string = authCookie.get("token");

  const response = await getCart(token);
  return {
    dataCart: response.cart,
  };
}

export const Cart = () => {
  const dataCart = useLoaderData() as CartType;

  return (
    <section className="my-14 p-4 md:my-20 md:p-0">
      <CartBreadcrumb />

      <h2 className="mt-10 font-bold font-poppins text-4xl text-b-black uppercase">
        Shopping cart
      </h2>

      <section className="my-10 grid gap-x-4 gap-y-6 grid-cols-12">
        <ShoppingCart cartItems={dataCart?.products} />
        <OrderSummary dataCart={dataCart} />
      </section>

      {/* <Recommendation products={[]} isLoading={true} page="cart" /> */}
    </section>
  );
};

Cart.loader = loader;
