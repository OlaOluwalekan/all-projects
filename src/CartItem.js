import React from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const CartItem = ({
  title,
  price,
  img,
  amount,
  increaseItemCount,
  decreaseItemCount,
  removeItem,
}) => {
  return (
    <div className='cart-item'>
      <section className='image-and-name'>
        <img src={img} alt={title} className='item-image' />
        <article className='name-price-remove'>
          <h4 className='item-name'>{title}</h4>
          <h4 className='item-price'>{price}</h4>
          <button className='remove-item' onClick={removeItem}>
            Remove
          </button>
        </article>
      </section>

      <article className='item-count'>
        <span className='increase-count' onClick={increaseItemCount}>
          <FaChevronUp />
        </span>
        <span className='item-amount'>{amount}</span>
        <span className='decrease-count' onClick={decreaseItemCount}>
          <FaChevronDown />
        </span>
      </article>
    </div>
  )
}

export default CartItem
