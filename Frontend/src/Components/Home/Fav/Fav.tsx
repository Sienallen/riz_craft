import { useEffect, useState } from 'react';
import { useFavContext } from '../../Context';
import './Fav.css';
import { FavCard } from './FavCard';
import { PrivateAxiosInstance } from '../../../api';
import { Product } from '../../Interface';

interface Fav {
  product: Product;
  id: string;
}

export const Fav = () => {
  const [favItem, setFavItem] = useState<Fav[]>([]);

  const getFavorite = () => {
    PrivateAxiosInstance.get<Fav[]>('/api/fav/')
      .then((res) => res.data)
      .then((data) => {
        setFavItem(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const removeFav = (id: string) => {
    PrivateAxiosInstance.delete(`/api/fav/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert('Fav product!');
        else alert('Failed to remove product');
        getFavorite();
      })
      .catch((error) => alert(error));
  };

  const addToCart = () => {
    console.log('add to cart function');
  };

  useEffect(() => {
    getFavorite();
  }, []);

  if (favItem.length !== 0) {
    return (
      <>
        <h1 id="fav-title"> Favorite Lists</h1>
        {favItem.map((item) => (
          <FavCard
            item={item.product}
            onRemove={removeFav}
            addToCart={addToCart}
            itemID={item.id}
            key={item.id}
          />
        ))}
      </>
    );
  } else {
    return (
      <>
        <h1 id="fav-title"> Favorite Lists</h1>
        <h1 className="empty-list">There is nothing in your favorites.</h1>
      </>
    );
  }
};
