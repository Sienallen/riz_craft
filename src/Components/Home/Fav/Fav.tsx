import { useFavContext } from '../../Context'
import './Fav.css'
import { FavCard } from './FavCard'

export const Fav = () => {

  const favContext = useFavContext();

  if(favContext.fav.length !== 0){
    return (
      <>
        <h1 id='fav-title'> Favorite Lists</h1>

        {favContext.fav.map((item) => 
          (
            <FavCard item={item} key={'cart' + item.path}/>
          )
        )}
      </>
    )
  }else{

    return (
      <>
        <h1 id='fav-title'> Favorite Lists</h1>
        <h1 className='empty-list'>There is nothing in your favorites.</h1>
      </>
    )
  }
  
}
