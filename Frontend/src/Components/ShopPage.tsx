import { useEffect, useState } from 'react';
import './ShopPage.css';
import ProductCard from './Products/ProductCard';
import { PublicAxiosInstance } from '../api';

const ShopPage = () => {
  const [q, setQ] = useState('');
  const [productItem, setProductItem] = useState([]);

  const getProduct = () => {
    PublicAxiosInstance.get('/api/products/')
      .then((res) => res.data)
      .then((data) => {
        setProductItem(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div>
        <div className="shop-page">
          <div className="search-bar">
            <input
              type="text"
              name="productSearch"
              id="search-input"
              value={q}
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="product-grid">
            {productItem.map((item) => (
              <ProductCard product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
