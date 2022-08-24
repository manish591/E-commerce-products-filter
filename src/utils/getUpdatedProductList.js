const applyfilterByPrice = (arr, type) => {
  if (type === 'HIGH_TO_LOW') {
    return [...arr].sort((a, b) => b.price - a.price);
  }

  if (type === 'LOW_TO_HIGH') {
    return [...arr].sort((a, b) => a.price - b.price);
  }

  return arr;
};

const applyFilterByIdealFor = (arr, type) => {
  if (type) {
    return arr.filter((item) => item.idealFor === type);
  }
  return arr;
};

const applyFilterByBrands = (arr, brands) => {
  if (brands.length > 0) {
    return arr.filter((item) => brands.includes(item.brand.toLowerCase()));
  }
  return arr;
};

const applyFilterBySizes = (arr, type) => {
  if (type.length > 0) {
    return arr.filter((item) => type.includes(item.sizes));
  }
  return arr;
};

const getUpdatedProductList = ({
  sort,
  idealFor,
  brands,
  productsData,
  sizes,
}) => {
  const getFilterBySort = applyfilterByPrice(productsData, sort);

  const getFilterBySizes = applyFilterBySizes(getFilterBySort, sizes);

  const getFilterByIdealFor = applyFilterByIdealFor(getFilterBySizes, idealFor);

  const getFilterByBrands = applyFilterByBrands(getFilterByIdealFor, brands);

  return getFilterByBrands;
};

export { getUpdatedProductList };
