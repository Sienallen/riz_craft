import './ProductCard.css';
import { Link } from 'react-router-dom';

interface props {
  name: string;
  img: string;
  description: string;
  path: string;
}

const ProductCard = ({ name, img, description, path }: props) => {
  
  return (
    <>
      <div className="product-card">
        <img src={img} alt={name} />
        <div className="product-cardBody">
          <h4>{name}</h4>
          <div className="product-cardDescript">
            <p>{description}</p>
            <Link to={path} className=" gold-button view">
              View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
