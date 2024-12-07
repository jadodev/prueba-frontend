import React from "react";
import { useEffect, useState, useMemo } from "react";
import { IonContent, IonPage } from "@ionic/react";
import { Header } from "../components/layout/Header";
import ProductList from "../components/product/ProductList";
import { Product } from "../types";
import { fetchProducts } from "../service/apiService";
import { Search } from "../components/common/Search";
import ProductSlider from "../components/common/Swiper/ProductSlider";

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
  
    return (
      <IonPage>
        <Header>
          <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        </Header>
        <IonContent fullscreen>
          <h3 className='p-4'>Productos populares</h3>
          <ProductSlider/>
          <h3 className='p-4'>Para ti ❤</h3>
          <ProductList products={filteredProducts}/>
        </IonContent>
      </IonPage>
    );
}

export default Home;