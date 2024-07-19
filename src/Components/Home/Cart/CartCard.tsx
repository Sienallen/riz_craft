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
        <h2>{item.name}</h2>
      </div>
    </>
  )
}

export default CartCard