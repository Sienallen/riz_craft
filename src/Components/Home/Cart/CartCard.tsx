import React from 'react'
import { productsList } from '../../Products/ProductLists';
import { PiSortDescendingBold } from 'react-icons/pi';

interface props{
  path: string,
  amount: number,
}

const CartCard = ({path, amount} : props ) => {

    const item = productsList[productsList.map(item => item.path).indexOf(path)]


  return (
    <>
      <div>
        <section>
          <img src={item.img} alt="item image" height='80' width = '80' className='item-img'/>
        </section>
        <section>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </section>
        
      </div>
    </>
  )
}

export default CartCard