import CartActionTypes from "../lib/redux/cart/cart.types";
import {
  addItemToCart,
  removeItemFromCart,
} from "../lib/redux/cart/cart.utils";
import cartReducer from "../lib/redux/cart/cart.reducer";
import { expect } from "chai";
import { INITIAL_STATE } from "../lib/redux/cart/cart.reducer";

describe("Cart reducer", () => {
  it("should return initial state", () => {
    expect(cartReducer(undefined, {})).to.equal(INITIAL_STATE);
  });

  it("should hide/un-hide cart", () => {
    expect(
      cartReducer(undefined, {
        type: CartActionTypes.TOGGLE_CART_HIDDEN,
      }).hidden
    ).to.eq(false);
  });

  it('should clear cart', () => {
      const MOCK_INITIAL_STATE = {
          hidden: true,
          cartItems: ['some content']
      }
      expect(!!cartReducer(MOCK_INITIAL_STATE, {
        type: CartActionTypes.CLEAR_CART,
    }).cartItems).to.eq(true)
  })
});
