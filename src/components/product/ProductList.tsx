import React from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Heart } from '../common/Heart';
import { ImageWithSkeleton } from '../ui/ImageWithSkeleton';
import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
}


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
          <p className="md:text-3xl font-medium text-center">
            <span className="line-through text-gray-500 mr-2">${product.precio}</span>
            <br></br>
            <span className="text-green-light font-semibold">
              {` ${4}% Descuento `}
            </span>
            <span className="font-medium">
              ${(Number(product.precio) * 0.96).toLocaleString() }
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
