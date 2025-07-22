import axios from "axios";
import { useEffect, useState } from "react";
import type { ProductDetail } from "@/types/product";   //se importi tipi metti import type

export function useProductDetail(id: string | undefined) {
    const [productDetail, setProductDetail] = useState<ProductDetail | null>(null)  //stato prodotto, null se non è stato caricato

    useEffect(() => {
        if (!id) return;   //se id non esiste, esci.

        axios.get<ProductDetail>(`https://fakestoreapi.com/products/${id}`)  //se l'id esiste, chiamata get su questo endpoint
            .then((response) => {
                setProductDetail(response.data);   //ritorna il prodotto =lo stato viene aggiornato con i dati che ritornano dalla chiamata
            })
            .catch(() => {    //se c'è errore, producDetail ha lo stato a null
                setProductDetail(null);
            });
    }, [id]);   //in base all'id dentro l'array, useEffect mostra un prodotto diverso

    return { productDetail };  //ritorna dettagli prodotto

}