import React from 'react';
import { productsList } from './Products/ProductLists';
import './ShopPage.css'
import ProductCard from './Products/ProductCard';

const ShopPage = () => {
  return(
    <>
    <div>
      <div>
        <label htmlFor="productSearch">Search</label>
        <input type="text" name='productSearch' id='productSearch' />
        <div className='productGrid'>
          {productsList.map(item =>(<ProductCard
              name={item.name}
              img={item.img}
              description={item.description}
              path={item.path}
            />))}
        </div>
      </div>
    </div>
    </>
  )
};

export default ShopPage;
