import { BrowserRouter, Route } from 'react-router-dom';
import PortadaScreen from './screens/PortadaScreen';
import ProductScreen from "./screens/ProductScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import ShopScreen from "./screens/ShopScreen";
import PaymentScreen from "./screens/PaymentScreen";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Route path="/payment" component={PaymentScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/shop/:id" component={ShoppingScreen}></Route>
        <Route path="/shop" component={ShopScreen} exact></Route>
        <Route path="/" component={PortadaScreen} exact></Route>
      </main>
    </BrowserRouter>
  );
};

export default App;
