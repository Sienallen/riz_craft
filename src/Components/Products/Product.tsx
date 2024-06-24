import React from 'react';
import './Product.css';
import { findProduct, productsList } from './ProductLists';
import { useParams } from 'react-router';

const Product = () => {
  const params = useParams();
  let itemData = null;
  productsList.map((item) => {
    if (params.path === item.path) {
      itemData = item;
    }
  });

  if (itemData !== null) {
    return (
      <>
        <div className="aboutItem">
          <img
            src={itemData['img']}
            alt={itemData['name']}
            className="productImg"
          />
          <section className="productData">
            <h2 className="productTitle">{itemData['name']}</h2>
            <p>{itemData['description']}</p>
            <button className='gold-button cartButton'>Add to cart</button>
          </section>
        </div>
      </>
    );
  }
};

export default Product;
