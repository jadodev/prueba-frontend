import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchProducts } from "../../service/apiService";
import { Header } from "../Header";
import { ProductDetails } from "./ProductDetails";
import { Product } from "../../types";
import { image } from "ionicons/icons";

const ProductInfoComponent: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProductData();
    };

    fetchData();
  }, [productId]);

  const fetchProductData = async () => {
    try {
      const products = await fetchProducts();
      const selectedProduct = products.find((product: Product) =>
        product._id === Number(productId)
      );
      if (selectedProduct) {
        setProduct({ ...selectedProduct, savedAt: selectedProduct.savedAt || "" });
      } else {
        console.warn("Producto no encontrado");
      }
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  return (
    <section>
        <Header children={undefined}/>
        <div className="md:relative md:h-full pt-4 top-0 p-4 flex flex-col justify-center items-center gap-x-16 md:w-3/4 md:mx-auto bg-gray-100/40 mt-4 md:mt-0">
          {product ? (
            <div className="pt-8 md:w-9/12 w-full flex flex-col gap-y-10">
              <img src={image} />
              <ProductDetails product={product} productId={productId} />
            </div>
          ) : (
            <div>Producto no encontrado</div>
          )}
        </div>
    </section>
  );
};

export default ProductInfoComponent;
