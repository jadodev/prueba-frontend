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
    <section>
      <Header children={undefined} />
        <div className="fixed mt-4 ml-4">
          <ButtonBack />
        </div>
        <div className=" md:w-auto md:h-[100px]">
          {product ? (
            <div className="flex items-center bg-light-gray">
              <ImageCarousel images={product.imagenes ?? []} />
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
