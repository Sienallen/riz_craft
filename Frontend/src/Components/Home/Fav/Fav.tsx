import { useEffect, useState } from 'react';
import { useFavContext } from '../../Context';
import './Fav.css';
import { FavCard } from './FavCard';
import AxiosInstance from '../../../api';

export const Fav = () => {
  const favContext = useFavContext();

  const [favItem, setFavItem] = useState([]);

  const getFavorite = () => {
    AxiosInstance.get('/api/products/')
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

  if (favContext.fav.length !== 0) {
    return (
      <>
        <h1 id="fav-title"> Favorite Lists</h1>

        {favContext.fav.map((item) => (
          <FavCard item={item} key={'cart' + item.path} />
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
