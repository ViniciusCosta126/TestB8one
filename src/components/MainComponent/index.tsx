import { useContext } from "react";
import { ProductsContext } from "../../types/Produto";
import { ProductContext } from "../../providers/auth";
import CardProduct from "../CardProduct";
import * as C from "./style";

const MainCard = () => {
  const { products } = useContext(ProductContext) as ProductsContext;
  return (
    <C.Container>
      {products.map((product) => {
        return <CardProduct key={product.id} product={product} />;
      })}
    </C.Container>
  );
};

export default MainCard;
