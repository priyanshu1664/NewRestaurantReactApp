import Header from "./Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onCloseCart={hideCartHandler} />}
      <div>
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
