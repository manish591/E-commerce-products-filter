import React from 'react';
import ClassNames from './ProductsList.module.css';
import { ProductCard } from '../product-card/ProductCard';
const ProductsList = ({ productsData }) => {
  return (
    <div className={ClassNames.productList}>
      {productsData.map((item) => {
        return <ProductCard key={item._id} {...item} />;
      })}
    </div>
  );
};

export { ProductsList };
