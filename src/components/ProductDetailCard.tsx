import React from "react";
import type { Product } from "@/types/product";   //se importi tipi metti import type
import { ButtonAddCart } from "./ButtonAddCart";

type ProductDetailProps = {
  product: Product;
  addCart: () => void;  //funzione per button
};


export const ProductDetailCard = ({product, addCart}: ProductDetailProps) => {

    return (
        <div>
        <img src="" alt="product image" />
        <h3> {product.title}</h3>
        <p>{product.description}</p>
        <p className="price">€{product.price}</p>
        <ButtonAddCart onClick={addCart}/>

        </div>
    )
}