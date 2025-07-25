import './FavCard.css';
import { Product } from '../../Interface';
import { FaStar, FaStarHalf } from 'react-icons/fa6';

interface props {
  item: Product;
  onRemove: (id: string) => void;
  addToCart: (itemData: Product) => void;
  itemID: string;
}

export const FavCard = ({ item, onRemove, addToCart, itemID }: props) => {
  return (
    <>
      <div id="fav-card">
        <img src={item.img} alt={item.name} className="fav-img" />

        <div id="fav-info">
          <div>
            <h4>{item.name}</h4>
            <p>{item.description}</p>

            <div className="product-rating">
              {Array.from({ length: item.rating }).map((_, index) => (
                <FaStar className="star" key={'star' + index} />
              ))}
              {item.rating - Math.floor(item.rating) ? (
                <FaStarHalf className="star" />
              ) : (
                <></>
              )}
              <p className="rating-number">{item.rating}</p>
            </div>

            <p>${item.price}</p>
          </div>

          <div id="fav-edits">
            <button className="gold-button" onClick={() => addToCart(item)}>
              Add to cart
            </button>

            <button className="gold-button" onClick={() => onRemove(itemID)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
