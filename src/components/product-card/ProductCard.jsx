import React from 'react';
import ClassNames from './ProductCard.module.css';

const ProductCard = ({ title, img, price }) => {
  return (
    <div className={ClassNames.productCard}>
      <section className={ClassNames.productCardImage}>
        <img src={img.WEB_P} alt="" />
      </section>
      <section className={ClassNames.productCardContent}>
        <div>
          <h3 className={ClassNames.productDescription}>{title}</h3>
          <p className={ClassNames.productDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            quos!
          </p>
          <p>₹{price}</p>
        </div>
        <div>
          <button>Add to wishlist</button>
          <button>Add to cart</button>
        </div>
      </section>
    </div>
  );
};

export { ProductCard };
