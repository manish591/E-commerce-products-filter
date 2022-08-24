const INITIAL_FILTER_STATE = {
  sort: '',
  idealFor: '',
  sizes: [],
  brands: [],
};

const FILTER_ACTION_TYPES = {
  SORT_BY_HIGH_TO_LOW: 'SORT_BY_HIGH_TO_LOW',
  SORT_BY_LOW_TO_HIGH: 'SORT_BY_LOW_TO_HIGH',
  FILTER_BY_IDEAL_FOR: 'FILTER_BY_IDEAL_FOR',
  FILTER_BY_SIZES: 'FILTER_BY_SIZES',
  FILTER_BY_BRANDS: 'FILTER_BY_BRANDS',
  CLEAR_FILTER: 'CLEAR_FILTER',
};

export { INITIAL_FILTER_STATE, FILTER_ACTION_TYPES };