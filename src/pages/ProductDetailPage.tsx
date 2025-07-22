import { useParams } from "react-router-dom";
import { ProductDetailCard } from "../components/ProductDetailCard";
import { useProductDetail } from "../hooks/useProductDetail";




export const ProductDetailPage = () => {

    const { id } = useParams<{ id: string }>(); //dall'url dell'endpoing useParams prende l'id del singolo prodotto

    const { productDetail } = useProductDetail(id);  //custom hook con get su endpoint

    const addItemToCart = () => {
        alert("Prodotto aggiunto con successo al carrello")

    };
    if (!productDetail) return (    //se prodotto con id non viene trovato
        <div>Prodotto non disponibile.</div>
    );

    return (
        <ProductDetailCard product={productDetail} addCart={addItemToCart} />  //quando ritorna corretto
    )
}