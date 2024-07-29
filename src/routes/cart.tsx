import { CartBreadcrumb } from "@/components/cart/cart-breadcrumb";
import { OrderSummary } from "@/components/cart/order-summary";
import { ShoppingCart } from "@/components/cart/shopping-cart";
// import { Recommendation } from "@/components/product/recommendation";

export const Cart = () => {
  const dataCart = {
    id: "clz2i8wo70001x2qrc76fzezx",
    userId: "clz1dhrue0008szmhr6tgopgt",
    createdAt: "2024-07-26T09:33:28.806Z",
    updatedAt: "2024-07-26T09:33:28.806Z",
    products: [
      {
        quantity: 3,
        cartId: "clz2i8wo70001x2qrc76fzezx",
        productId: "clz23kmr8000010zmey18dkcm",
        createdAt: "2024-07-29T08:14:20.679Z",
        updatedAt: "2024-07-29T08:14:31.764Z",
        product: {
          id: "clz23kmr8000010zmey18dkcm",
          name: "UT My Special Friends Lengan Pendek",
          slug: "ut-my-special-friends-lengan-pendek",
          price: 149000,
          imageUrl:
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466347/item/goods_62_466347.jpg",
          stock: 100,
          size: null,
          sku: null,
          overview:
            "A collection in collaboration with ”Thomas” and ”Peppa Pig”, two popular children's cartoons. Popular characters are depicted under the theme of friends.",
          materials: "Body: 100% Cotton/ Rib: 73% Cotton, 27% Polyester",
          categoryId: null,
          createdAt: "2024-07-26T02:42:41.587Z",
          updatedAt: "2024-07-26T02:43:28.455Z",
        },
      },
    ],
  };

  return (
    <section className="my-14 p-4 md:my-20 md:p-0">
      <CartBreadcrumb />

      <h2 className="mt-10 font-bold font-poppins text-4xl text-b-black uppercase">
        Shopping cart
      </h2>

      <section className="my-10 grid gap-x-4 gap-y-6 grid-cols-12">
        <ShoppingCart cartItems={dataCart.products} />
        <OrderSummary dataCart={dataCart} />
      </section>

      {/* <Recommendation products={[]} isLoading={true} page="cart" /> */}
    </section>
  );
};
