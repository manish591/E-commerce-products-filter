import React, { useReducer, useState } from 'react';
import ClassNames from './ProductListng.module.css';
import { Filters } from '../filters/Filters';
import { ProductsList } from '../products-list/ProductsList';
import { filterReducer } from '../../reducer/filter-reducer';
import { INITIAL_FILTER_STATE } from '../../reducer/constants';
import { getUpdatedProductList } from '../../utils/getUpdatedProductList';
import { PRODUCTS_DATA } from '../../data/products-data';

const ProductListing = () => {
  const [state, dispatch] = useReducer(filterReducer, INITIAL_FILTER_STATE);
  const [data, setData] = useState(PRODUCTS_DATA.products);

  const filteredResults = getUpdatedProductList({
    productsData: data,
    ...state,
  });

  return (
    <div className={ClassNames.productListing}>
      <section className={ClassNames.productListingHeader}>
        <h1>Product listing</h1>
      </section>
      <section className={ClassNames.productListingMain}>
        <Filters state={state} dispatch={dispatch} />
        {filteredResults.length < 1 ? (
          <h1 className={ClassNames.noProductFound}>No Products Found</h1>
        ) : (
          <ProductsList productsData={filteredResults} />
        )}
      </section>
    </div>
  );
};

export { ProductListing };
