import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ProductCard } from "../product/product-card";

export const Collections = () => {
  const navigate = useNavigate();

  const hanldeViewMore = () => {
    navigate("/products");
  };

  const dataProducts = [
    {
      id: "clylhwv9v00005q8a4sdgpycx",
      name: "UT My Special Friends Lengan Pendek",
      slug: "ut-my-special-friends-lengan-pendek",
      price: 149000,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466347/item/goods_62_466347.jpg",
      stock: 100,
      size: null,
      sku: null,
      overview: null,
      materials: null,
      categoryId: null,
      createdAt: "2024-07-14T11:52:02.129Z",
      updatedAt: "2024-07-14T11:52:02.129Z",
    },
    {
      id: "clyli12ql00015q8as9czsjur",
      name: "Baju Terusan | Lengan Pendek Garis",
      slug: "baju-terusan-lengan-pendek-garis",
      price: 99000,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464513/item/goods_31_464513.jpg",
      stock: 100,
      size: null,
      sku: null,
      overview: null,
      materials: null,
      categoryId: null,
      createdAt: "2024-07-14T11:55:18.428Z",
      updatedAt: "2024-07-14T11:55:18.428Z",
    },
    {
      id: "clyli21uk00025q8asif4gvlf",
      name: "Celana Legging Crop",
      slug: "celana-legging-crop",
      price: 129000,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464633/item/goods_11_464633.jpg",
      stock: 100,
      size: null,
      sku: null,
      overview: null,
      materials: null,
      categoryId: null,
      createdAt: "2024-07-14T11:56:03.932Z",
      updatedAt: "2024-07-14T11:56:03.932Z",
    },
    {
      id: "clylhwv9v00005q8a4sdgpycx",
      name: "UT My Special Friends Lengan Pendek",
      slug: "ut-my-special-friends-lengan-pendek",
      price: 149000,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/466347/item/goods_62_466347.jpg",
      stock: 100,
      size: null,
      sku: null,
      overview: null,
      materials: null,
      categoryId: null,
      createdAt: "2024-07-14T11:52:02.129Z",
      updatedAt: "2024-07-14T11:52:02.129Z",
    },
    {
      id: "clyli12ql00015q8as9czsjur",
      name: "Baju Terusan | Lengan Pendek Garis",
      slug: "baju-terusan-lengan-pendek-garis",
      price: 99000,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464513/item/goods_31_464513.jpg",
      stock: 100,
      size: null,
      sku: null,
      overview: null,
      materials: null,
      categoryId: null,
      createdAt: "2024-07-14T11:55:18.428Z",
      updatedAt: "2024-07-14T11:55:18.428Z",
    },
    {
      id: "clyli21uk00025q8asif4gvlf",
      name: "Celana Legging Crop",
      slug: "celana-legging-crop",
      price: 129000,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464633/item/goods_11_464633.jpg",
      stock: 100,
      size: null,
      sku: null,
      overview: null,
      materials: null,
      categoryId: null,
      createdAt: "2024-07-14T11:56:03.932Z",
      updatedAt: "2024-07-14T11:56:03.932Z",
    },
    {
      id: "clyli12ql00015q8as9czsjur",
      name: "Baju Terusan | Lengan Pendek Garis",
      slug: "baju-terusan-lengan-pendek-garis",
      price: 99000,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464513/item/goods_31_464513.jpg",
      stock: 100,
      size: null,
      sku: null,
      overview: null,
      materials: null,
      categoryId: null,
      createdAt: "2024-07-14T11:55:18.428Z",
      updatedAt: "2024-07-14T11:55:18.428Z",
    },
    {
      id: "clyli21uk00025q8asif4gvlf",
      name: "Celana Legging Crop",
      slug: "celana-legging-crop",
      price: 129000,
      imageUrl:
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/464633/item/goods_11_464633.jpg",
      stock: 100,
      size: null,
      sku: null,
      overview: null,
      materials: null,
      categoryId: null,
      createdAt: "2024-07-14T11:56:03.932Z",
      updatedAt: "2024-07-14T11:56:03.932Z",
    },
  ];

  return (
    <section>
      <h2 className="font-bold font-poppins text-4xl text-b-black text-center uppercase">
        Collection
      </h2>
      <div className="my-10 p-4 md:p-0">
        <div className="grid gap-x-4 gap-y-8 grid-cols-12">
          {dataProducts.map((product, index) => (
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
      </div>
    </section>
  );
};
