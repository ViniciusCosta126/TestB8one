import { Product, ProductsContext } from "../../types/Produto";
import * as C from "./style";
import Check from "../../assets/Vector (1).svg";
import {formatNumber} from '../../utils/formatNumber'
import { ProductContext } from "../../providers/auth";
import { useContext } from "react";
import {FiHeart} from 'react-icons/fi'
interface Props {
  product: Product;
}
const CardProduct = ({ product}: Props) => {
  const {addWishList,addToCart} = useContext(ProductContext) as ProductsContext
  return (
    <C.Container>
      <C.ImgContainer>
        <img src={product.img} alt="" />
        <C.HeartWish onClick={()=> addWishList(product.id)} is_favorite={product.is_favorite}>
            <FiHeart/>
        </C.HeartWish>
      </C.ImgContainer>
      <C.ContentContainer>
        <h2>{product.title}</h2>
        <p className="value-original">R$ {formatNumber(product.value_original)}</p>
        <p className="discount-value">R$ {formatNumber(product.value_discount)}</p>
        <p className="installments">
          em até <span>{product.installments}x de R$
          {formatNumber(product.value_discount/product.installments)} </span>sem juros
        </p>
      </C.ContentContainer>
      <C.ButtonCard is_add={product.is_add} onClick={()=> addToCart(product.id)}><img src={Check}></img>{product.is_add ? "Adicionado" : "Adicionar"}</C.ButtonCard>
    </C.Container>
  );
};

export default CardProduct;
