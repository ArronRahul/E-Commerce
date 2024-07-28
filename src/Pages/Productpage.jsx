import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Productpage = () => {
  const { all_product } = useContext(ShopContext);
  const { productid } = useParams();
  const product = all_product.find((e) => e.id === Number(productid));

  return (
    <>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </>
  );
}

export default Productpage;
