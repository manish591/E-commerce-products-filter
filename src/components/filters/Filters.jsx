import React from 'react';
import ClassNames from './Filters.module.css';
import { FILTER_ACTION_TYPES } from '../../reducer/constants';
import { brandsData } from '../../utils/brands';

const Filters = ({ state, dispatch }) => {
  const { sort, idealFor, sizes, brands } = state;

  console.log(state);
  return (
    <div className={ClassNames.filters}>
      <section className={ClassNames.filtersHeader}>
        <h1>Filters</h1>
        <button
          className={ClassNames.clearFilter}
          onClick={() => {
            dispatch({ type: FILTER_ACTION_TYPES.CLEAR_FILTER });
          }}
        >
          Clear Filter
        </button>
      </section>
      <section>
        <fieldset>
          <legend>Sort</legend>
          <section>
            <input
              type="radio"
              id="sort-high-to-low"
              name="sort"
              checked={sort === 'HIGH_TO_LOW'}
              onChange={() => {
                dispatch({
                  type: FILTER_ACTION_TYPES.SORT_BY_HIGH_TO_LOW,
                  payload: 'HIGH_TO_LOW',
                });
              }}
            />
            <label htmlFor="sort-high-to-low">High To Low</label>
          </section>
          <section>
            <input
              type="radio"
              id="sort-low-to-high"
              name="sort"
              checked={sort === 'LOW_TO_HIGH'}
              onChange={() => {
                dispatch({
                  type: FILTER_ACTION_TYPES.SORT_BY_LOW_TO_HIGH,
                  payload: 'LOW_TO_HIGH',
                });
              }}
            />
            <label htmlFor="sort-low-to-high">Low To High</label>
          </section>
        </fieldset>
        <fieldset>
          <legend>Ideal For</legend>
          <section>
            <input
              type="radio"
              id="ideal-for-men"
              name="ideal-for"
              checked={idealFor === 'Men'}
              onChange={() => {
                dispatch({
                  type: FILTER_ACTION_TYPES.FILTER_BY_IDEAL_FOR,
                  payload: 'Men',
                });
              }}
            />
            <label htmlFor="ideal-for-men">Men</label>
          </section>
          <section>
            <input
              type="radio"
              id="ideal-for-women"
              name="ideal-for"
              checked={idealFor === 'Women'}
              onChange={() => {
                dispatch({
                  type: FILTER_ACTION_TYPES.FILTER_BY_IDEAL_FOR,
                  payload: 'Women',
                });
              }}
            />
            <label htmlFor="ideal-for-women">Women</label>
          </section>
        </fieldset>
        <fieldset>
          <legend>Sizes</legend>
          {['S', 'M', 'L', 'XL'].map((item, index) => {
            return (
              <section>
                <input
                  type="checkbox"
                  id={`${item}${index}`}
                  name="sizes"
                  checked={sizes.some((b) => b === item)}
                  onChange={() => {
                    dispatch({
                      type: FILTER_ACTION_TYPES.FILTER_BY_SIZES,
                      payload: item,
                    });
                  }}
                />
                <label htmlFor={`${item}${index}`}>{item}</label>
              </section>
            );
          })}
        </fieldset>
        <fieldset>
          <legend>Brands</legend>
          {brandsData.map((item, index) => {
            return (
              <section key={item}>
                <input
                  type="checkbox"
                  id={`${item}${index}`}
                  name="brands"
                  checked={brands.some((b) => b === item.toLowerCase())}
                  onChange={() => {
                    dispatch({
                      type: FILTER_ACTION_TYPES.FILTER_BY_BRANDS,
                      payload: item.toLowerCase(),
                    });
                  }}
                />
                <label htmlFor={`${item}${index}`}>{item}</label>
              </section>
            );
          })}
        </fieldset>
      </section>
    </div>
  );
};

export { Filters };
