export type Product= {
    id:number;
    title:string;
    value_original:number;
    value_discount:number;
    is_favorite:boolean;
    installments:number;
    img:string;
    is_add:boolean
}
export type ProductsContext ={
    products: Product[]
    addWishList: (id:number)=>void
    addToCart:(id:number)=>void
}