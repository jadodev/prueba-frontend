import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import { Header } from "../components/layout/Header";
import { ButtonBack } from "../components/common/ButtonBack";
import { CartItem } from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import { DetailsShopping } from "../components/cart/DetaillShopping";

const Checkout: React.FC = () => {
  const { cart } = useCart();
  const cartItems = Object.values(cart);

  return (
    <IonPage>
      <Header>
        <p className="text-lg">Ya casi es tuyo!</p>
      </Header>
      <IonContent fullscreen>
        <section className="mt-4 md:mt-8 ml-4 md:ml-8">
          <ButtonBack />
        </section>
        <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:items-start xl:w-3/4 md:mx-auto">
          <div className="flex flex-col items-center gap-4 w-full md:w-2/3">
            {cartItems.map((product) => (
              <CartItem key={product._id} product={product} />
            ))}
          </div>
          <div className="w-full md:w-1/3 flex justify-center sm:ml-8">
            <DetailsShopping/>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Checkout;
