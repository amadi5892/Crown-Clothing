import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../context/cart.context';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const {currentCart, setCurrentCart} = useContext(CartContext);

    const toggleCurrentCart = () => setCurrentCart(!currentCart);

    return(
        <div className='cart-icon-container' onClick={toggleCurrentCart} >
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count' >0</span>

        </div>
    )
}

export default CartIcon;