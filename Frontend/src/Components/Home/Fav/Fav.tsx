import { useEffect, useState } from 'react';
import { useFavContext } from '../../Context';
import './Fav.css';
import { FavCard } from './FavCard';
import { PrivateAxiosInstance } from '../../../api';
import { Product } from '../../Interface';

interface Fav {
  Product: Product;
}

export const Fav = () => {
  const favContext = useFavContext();

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

  useEffect(() => {
    getFavorite();
  }, []);
  favItem.map((item) => {
    console.log(item);
  });
  if (favContext.fav.length !== 0) {
    return (
      <>
        <h1 id="fav-title"> Favorite Lists</h1>

        {favItem.map((item) => (
          <FavCard item={item.Product} />
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
