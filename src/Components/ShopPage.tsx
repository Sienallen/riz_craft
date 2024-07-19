import { useContext, useState } from 'react';
import { productsList } from './Products/ProductLists';
import './ShopPage.css';
import ProductCard from './Products/ProductCard';

const ShopPage = () => {
  const [q, setQ] = useState('');

  const items = productsList.filter((item) => {
    if (item.name.toLowerCase().includes(q)) {
      return item;
    }
  });

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
            {items.map((item) => (
              <ProductCard
                name={item.name}
                img={item.img}
                description={item.description}
                path={item.path}
                key={'shopPage' + item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
