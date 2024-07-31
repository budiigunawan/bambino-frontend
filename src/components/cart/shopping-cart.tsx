import { Product } from "@/lib/types";
import { CartItem } from "./cart-item";

type CartItem = {
  quantity: number;
  cartId: string;
  productId: string;
  createdAt: string | null;
  updatedAt: string | null;
  product: Product;
};

type ShoppingCartParams = {
  cartItems: CartItem[];
};

export const ShoppingCart = ({ cartItems }: ShoppingCartParams) => {
  return (
    <section className="col-span-12 lg:col-span-7">
      {cartItems?.length > 0 ? (
        cartItems.map((item) => (
          <CartItem dataItem={item} key={item.productId} />
        ))
      ) : (
        <p>Cart is empty</p>
      )}
    </section>
  );
};
