import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchProducts } from "../../service/apiService";
import { Header } from "../layout/Header";
import { ButtonBack } from "../common/ButtonBack";
import { Skeleton } from "../common/Skeleton";
import { ImageCarousel } from "../ui/ImageCarrousel";
import { ProductDetails } from "./ProductDetails";
import { Product } from "../../types";


const ProductInfoComponent: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchProductData();
      setLoading(false);
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

  if (loading) {
    return <Skeleton />;
  }

  return (
    <>
    <Header><p></p></Header>
   
  <section>
  <div className="m-4">
    <ButtonBack />
  </div>
  <div className="w-full h-full mt-4">
    {product ? (
      <div className="flex flex-col  items-center bg-light-gray h-[90vh]">
        <h2 className="text-2xl md:text-5xl font-semibold">{product.titulo}</h2>
        <div className="w-full md:w-1/2 h-full">
          <ImageCarousel images={product.imagenes ?? []} />
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-4">
          <ProductDetails product={product} productId={productId} />
        </div>
      </div>
    ) : (
      <div>Producto no encontrado</div>
    )}
  </div>
</section>
</>
  );
};

export default ProductInfoComponent;