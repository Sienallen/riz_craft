import { useEffect, useState } from 'react';
import './Product.css';
import { FaStar, FaStarHalf } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router';
import { Fav, Product } from '../Interface';
import isAuthenticated from '../Accounts/isAuthenticated';
import { PrivateAxiosInstance, PublicAxiosInstance } from '../../api';
import { UpdateCart } from '../Home/Cart/CartFunctions';

const ProductPage = () => {
  const params = useParams();
  const path: string = `${params.path}`;
  const navigate = useNavigate();
  const [favItem, setFavItem] = useState<Fav | undefined>();
  const [itemData, setItemData] = useState<Product>();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  //Fetches for the list of products and gets the data that matches the path of the page.
  const getProduct = () => {
    PublicAxiosInstance.get('/api/products/')
      .then((res) => res.data)
      .then((data) => {
        setItemData(data.find((item: Product) => item.path === path));
      })
      .catch((err) => alert(err));
  };

  const checkFav = () => {
    PrivateAxiosInstance.get<Fav[]>('/api/fav/')
      .then((res) => res.data)
      .then((data) => {
        setFavItem(data.find((item) => item.product.path === path));
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getProduct();
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setIsAuth(result);
      if (result) {
        checkFav();
      }
    };
    checkAuth();
  }, []);

  // ***** New function to transition project to backend ******
  const clickFav = async (itemData: Product, favItem: Fav | undefined) => {
    if (favItem) {
      await PrivateAxiosInstance.delete(`/api/fav/delete/${favItem.id}/`)
        .then((res) => {
          if (res.status === 201) {
            alert('Removed from favorite!');
          } else alert('Failed to remove product');
        })
        .catch((error) => alert(error));
    } else {
      /* Sending a Post to add itemdata to the backend */
      await PrivateAxiosInstance.post('api/fav/', { product_id: itemData.id })
        .then((res) => {
          if (res.status == 201) {
            alert('Added to favorite!');
          } else alert('Failed to add.');
        })
        .catch((err) => alert(err));
    }
    await checkFav();
  };

  // ***** EOF function to transition project to backend ******
  if (itemData !== undefined) {
    return (
      <>
        <div>
          <h6 className="announcement">Spend Over $50 For Free Shipping</h6>
        </div>

        <div className="aboutItem">
          <img
            src={import.meta.env.VITE_API_URL + itemData.img}
            alt={itemData.name}
            className="productImg"
          />
          <section className="productData">
            <div className="product-header">
              <h2 className="product-title">{itemData.name}</h2>
              {/* Displays the favorite icon */}
              <svg
                onClick={() => {
                  if (!isAuth) navigate('/login');
                  clickFav(itemData, favItem);
                }}
                id={!!favItem ? 'in-fav' : ''}
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
                <p className="product-price">${itemData.price}</p>
                <div className="product-rating">
                  {Array.from({ length: itemData.rating }).map((_, index) => (
                    <FaStar className="star" key={'star' + index} />
                  ))}
                  {itemData.rating - Math.floor(itemData.rating) ? (
                    <FaStarHalf className="star" />
                  ) : (
                    <></>
                  )}
                  <p className="rating-number">{itemData.rating}</p>
                </div>
              </div>

              <p className="product-description">{itemData.description}</p>
              <p> 5-10 days shipping</p>

              <button
                className="gold-button product-button"
                onClick={() => UpdateCart(itemData)}
              >
                Add to cart
              </button>
            </div>
          </section>
        </div>
      </>
    );
  }
};

export default ProductPage;
