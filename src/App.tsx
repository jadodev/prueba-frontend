import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import ProductInfo from './pages/ProductInfo';
import Home from './pages/Home';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/Checkout';
import PageNotFount from './pages/PageNotFound';

import '@ionic/react/css/core.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <CartProvider>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home}>
        </Route>
        <Route
          exact
          path="/product-info/:productId"
          component={ProductInfo}
        />
        <Route
          exact
          path="/favorites"
          component={ Checkout }
        />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route >
          <PageNotFount/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    </CartProvider>
  </IonApp>
);

export default App;
