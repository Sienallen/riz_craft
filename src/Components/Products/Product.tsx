import './Product.css';
import { productsList } from './ProductLists';
import { FaStar, FaStarHalf } from 'react-icons/fa6';
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
            <div className="product-header">
              <h2 className="product-title">{itemData['name']}</h2>
              <svg
                width="28"
                height="27"
                viewBox="0 0 28 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M 20.595 18.278 C 18.056 21.029 15.324 23.253 14 24.278 C 12.676 23.253 9.944 21.029 7.405 18.278 C 3.768 14.338 1.846 10.734 1.846 7.857 C 1.846 4.537 4.562 1.836 7.9 1.836 C 10.096 1.836 12.124 3.027 13.193 4.944 L 14 6.392 L 14.807 4.944 C 15.876 3.027 17.904 1.836 20.1 1.836 C 23.438 1.836 26.154 4.537 26.154 7.857 C 26.154 10.734 24.232 14.338 20.595 18.278 Z"></path>
              </svg>
            </div>
            <div className="product-body">
              <div>
                <p className="product-price">${itemData['price']}</p>
                <div className="product-rating">
                  {Array.from({ length: itemData['rating'] }).map(
                    (_) => (
                      <FaStar className="star" />
                    )
                  )}
                  {itemData['rating'] - Math.floor(itemData['rating']) ? (
                    <FaStarHalf className="star" />
                  ) : (
                    <></>
                  )}
                  <p className="rating-number">{itemData['rating']}</p>
                </div>
              </div>

              <p className="product-description">{itemData['description']}</p>
              <p> 5-10 days shipping</p>
              <button className="gold-button product-button">
                Add to cart
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }
};

export default Product;
