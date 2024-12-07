import React from 'react';
import { useHistory } from 'react-router-dom';
import { Heart } from '../common/Heart';
import { ImageWithSkeleton } from './ImageWithSkeleton';
import { Product } from '../../types';
import { useCart } from '../../hooks/useCart';

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

  const handleClick = (productId: number) => ( event: React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
    history.push(`/product-info/${productId}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-8 p-4 lg:w-[1080px] ml-auto mr-auto mt-8">
      {products.map((product) => (
        <div
          key={product._id.toString()}
          className="relative lg:w-[500px] cursor-pointer flex flex-col items-center border p-4 rounded-lg shadow-lg md:shadow-xs md:border-none"
          onClick={() => addProduct(product)}
        >
          <Heart 
            product={product}
            removeProduct={removeProduct}
            addProduct={addProduct}
          />
          <div onClick={handleClick(product._id)}>
            <ImageWithSkeleton src={product.imagen} alt={product.titulo}/>
          </div>
          <h3 className="mt-4 md:text-xl font-semibold text-center">{product.titulo}</h3>
          <p className="font-medium">{formatPrice(Number(product.precio))}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;