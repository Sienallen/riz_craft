
import { cartList } from '../../Interface';
import { productsList } from '../../Products/ProductLists';
import './CartCart.css'


interface props{
  item: cartList
}

const CartCard = ({item} : props ) => {

  return (
    <>
      <div id='cart-card'>
        <section id='cart-head' >
          <img src={item.img} alt="item image" height='80' width = '80' className='cart-img'/>

          <section id='cartCard-title'>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          
          <p>Remove</p>
          </section>
        </section>
        
        <section id='cart-price'>
          <p>{'$'+item.price}</p>
        </section>
        <section id='cart-qty'>
          <p>-</p>
          <p>{item.amount}</p>
          <p>+</p>
        </section>
        <section id='cart-item-total'>
          <p>{'$'+item.price * item.amount}</p>
        </section>

        
      </div>
    </>
  )
}

export default CartCard