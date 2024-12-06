import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import ProductInfo from './pages/ProductInfo';
import Home from './pages/Home';

import '@ionic/react/css/core.css';
import { CartProvider } from './context/CartContext';

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
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    </CartProvider>
  </IonApp>
);

export default App;
