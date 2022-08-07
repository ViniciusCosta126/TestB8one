import { createContext, useState } from "react";
import { ProductsContext, Product } from "../types/Produto";
import ImageCard from "../assets/image.png";

export const ProductContext = createContext<ProductsContext | null>(null);
interface AuxProps {
  children: React.ReactNode;
}
const ProductProvider = ({ children }: AuxProps) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title:
        "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50 ",
      value_original: 2813.0,
      value_discount: 2599.0,
      img: ImageCard,
      is_favorite: false,
      installments: 10,
      is_add: false,
    },
    {
      id: 2,
      title:
        "Monitor LED 27'' Gamer Curvo Samsung 1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50 ",
      value_original: 2813.0,
      value_discount: 2599.0,
      img: ImageCard,
      is_favorite: false,
      installments: 10,
      is_add: false,
    },
  ]);
  const addWishList = (id: number) => {
    const newProducts = products.map((product) => {
      return product.id === id
        ? { ...product, is_favorite: !product.is_favorite }
        : product;
    });
    setProducts(newProducts);
  };

  const addToCart = (id: number) => {
    const newProducts = products.map((product) => {
      return product.id === id
        ? { ...product, is_add: !product.is_add }
        : product;
    });
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider value={{ products, addWishList, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
