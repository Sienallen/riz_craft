import { useEffect, useState } from 'react';
import './ShopPage.css';
import ProductCard from './Products/ProductCard';
import { PublicAxiosInstance } from '../api';
import { Product } from './Interface';

const ShopPage = () => {
  const [q, setQ] = useState('');
  const [productItem, setProductItem] = useState<Product[]>([]);

  const getProduct = () => {
    PublicAxiosInstance.get('/api/products/')
      .then((res) => res.data)
      .then((data) => {
        setProductItem(data);
      })
      .catch((err) => alert(err));
  };

  const filterProducts = productItem.filter((item) => {
    const qLength = q.length;
    if (item.name.slice(0, qLength).toLowerCase().includes(q.toLowerCase())) {
      return item;
    }
  });

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
            {filterProducts.map((item, index) => (
              <ProductCard product={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
