import './FavCard.css'
import { Crafts } from '../../Interface'
import { FaStar, FaStarHalf } from 'react-icons/fa6'
import { useCartContext, useFavContext } from '../../Context'

interface props{
  item: Crafts
}

export const FavCard = ({item} : props) => {

  const cartContext = useCartContext();
  const favContext = useFavContext();

  const addToCart = (newPath : string, newAmount: number = 1) =>{
    
    if(cartContext !== undefined && cartContext.setCart !== undefined){

      if(cartContext.cart !== undefined){
        const updatedCart = [...cartContext.cart]
        const index = updatedCart.map(item => item.path).indexOf(newPath)
        if(index === -1){

          cartContext.setCart([...updatedCart, {path : newPath, number : newAmount }])
        }else{
          updatedCart[index].number++;
          cartContext.setCart(updatedCart)
        }
        

      }else if(cartContext.cart === undefined || []){
        const updatedCart = [{number : 1, path : newPath}]
        cartContext.setCart(updatedCart)
      } 
    }
  }

  const removeFav = () => {

    const updatedFav = [...favContext.fav]
    const index = updatedFav.map(item => item.path).indexOf(item.path)
    updatedFav.splice(index, 1)
    favContext.setFav(updatedFav)

    
  }

  return (
    <>
      <div id='fav-card'>
        <img src={item.img} alt={item.name} className='cart-img'></img>

        <div id='fav-info'>
          <div>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            
            <div className="product-rating">
                  {Array.from({ length: item.rating }).map(
                    (_, index) => (
                      <FaStar className="star" key={'star' + index} />
                    )
                  )}
                  {item.rating - Math.floor(item.rating) ? (
                    <FaStarHalf className="star" />
                  ) : (
                    <></>
                  )}
                  <p className="rating-number">{item.rating}</p>
                </div>

              <p>${item.price}</p>

          </div>

          <div id='fav-edits'>
            <button className="gold-button" onClick={() => addToCart(item.path)}>
              Add to cart
            </button>

            <button className='gold-button' onClick={removeFav}>
              Remove
            </button>
          </div>
          
        </div>
      </div>
      

        
    </>
  )
}
