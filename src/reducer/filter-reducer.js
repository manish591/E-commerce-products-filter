import { INITIAL_FILTER_STATE, FILTER_ACTION_TYPES } from './constants';

const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_ACTION_TYPES.SORT_BY_HIGH_TO_LOW:
      return { ...state, sort: action.payload };

    case FILTER_ACTION_TYPES.SORT_BY_LOW_TO_HIGH:
      return { ...state, sort: action.payload };

    case FILTER_ACTION_TYPES.FILTER_BY_BRANDS:
      return state.brands.some((item) => item === action.payload)
        ? {
            ...state,
            brands: state.brands.filter((item) => item !== action.payload),
          }
        : { ...state, brands: [...state.brands, action.payload] };

    case FILTER_ACTION_TYPES.FILTER_BY_SIZES:
      return state.sizes.some((item) => item === action.payload)
        ? {
            ...state,
            sizes: state.sizes.filter((item) => item !== action.payload),
          }
        : { ...state, sizes: [...state.sizes, action.payload] };

    case FILTER_ACTION_TYPES.FILTER_BY_IDEAL_FOR:
      return { ...state, idealFor: action.payload };

    case FILTER_ACTION_TYPES.CLEAR_FILTER:
      return {
        sort: '',
        idealFor: '',
        sizes: '',
        brands: [],
      };

    default:
      return state;
  }
};

export { filterReducer };
