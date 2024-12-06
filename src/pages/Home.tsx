import React from "react";
import { useEffect, useState, useMemo } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../components/Header";
import ProductList from "../components/ProductList";
import { Product } from "../types";
import { fetchProducts } from "../service/apiService";

const filterProductsByQuery = (products: Product[], query: string): Product[] => {
    if (!query) return products; 
  
    const queryLowercased = query.toLowerCase();
    return products.filter((product) =>
      product.titulo.toLowerCase().includes(queryLowercased) ||
      product.descripcion.toLowerCase().includes(queryLowercased)
    );
  };

const Home: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>(''); 
  
    const getProductsList = async () => {
      const productsList = await fetchProducts();
      setProducts(productsList);
    };
  
    useEffect(() => {
      getProductsList();
    }, []);
  
    const filteredProducts = useMemo(() => filterProductsByQuery(products, searchQuery), [products, searchQuery]);
  
    return(
        <IonPage>
            <Header/>
            <IonContent fullscreen>
                <ProductList products={filteredProducts}/>
            </IonContent>
        </IonPage>
    )
}

export default Home;