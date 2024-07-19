import { CartBreadcrumb } from "@/components/cart/cart-breadcrumb";
import { OrderSummary } from "@/components/cart/order-summary";
import { ShoppingCart } from "@/components/cart/shopping-cart";
import { Recommendation } from "@/components/product/recommendation";

export const Cart = () => {
  return (
    <>
      <section className="my-14 p-4 md:my-20 md:p-0">
        <CartBreadcrumb />
        <section className="my-10 grid gap-x-4 gap-y-6 grid-cols-12">
          <ShoppingCart />
          <OrderSummary />
        </section>
      </section>
      <Recommendation products={[]} isLoading={true} page="cart" />
    </>
  );
};
