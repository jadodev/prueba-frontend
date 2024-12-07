import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Heart } from '../common/Heart';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
}

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(price);
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { addProduct, removeProduct } = useCart();
  const history = useHistory();

  const navigateToDetails = (productId: number) => {
    history.push(`/product-info/${productId}`);
  };

  const remove = (idProduct: number) =>{
    removeProduct(idProduct)
  }

  const increaseQuantity = (product: Product) => {
    addProduct(product)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 px-4 lg:w-[1080px] ml-auto mr-auto">
      {products.map((product) => (
        <div
          key={product._id.toString()}
          onClick={()=> navigateToDetails(product._id)}
          className="relative lg:w-[500px] cursor-pointer flex flex-col items-center border p-4 rounded-lg shadow-lg md:shadow-xs"
        >
          <Heart 
            unactive={()=> remove(product._id)}
            active={()=> increaseQuantity(product)}
          />
          <ImageWithSkeleton src={product.imagen} alt={product.titulo} />
          <h5 className="mt-4 md:text-xl font-semibold text-center">{product.titulo}</h5>
          <p className="font-medium text-dark-gray">{formatPrice(Number(product.precio))}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
