import { useReducer } from 'react';
import { cartReducer, cartActions, initialCartState } from './cart-redux'
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction(cartActions.add({ item }));
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction(cartActions.remove({ id }));
  };

  const clearCartHandler = () => {
    dispatchCartAction(cartActions.clear());
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;