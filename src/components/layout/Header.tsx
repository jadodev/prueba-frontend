import React, { ReactNode } from "react";
import { IonHeader, IonToolbar, IonRouterLink } from "@ionic/react";
import { useHistory, useLocation } from "react-router-dom";
import { Logo } from "../common/Logo";
import { Cart } from "../cart/Cart";
import '../../theme/variables.css'

interface HeaderProps {
  children: ReactNode;
}
export const Header: React.FC<HeaderProps> = ({children}) => {
    
    const history = useHistory();
    const location = useLocation();
  
    const handleLogoClick = (e: React.MouseEvent) => {
      if (location.pathname !== "/") {
        history.push("/"); 
      } 
      e.preventDefault(); 
    };
  
    const handleCartClick = (e: React.MouseEvent) => {
      if (location.pathname !== "/favorites") {
          history.push("/favorites"); 
      }
      e.preventDefault(); 
    }
  return (
    <IonHeader>
      <IonToolbar className=" md:h-[100px] h-[70px] flex justify-center shadow-xl shadow-green-light/20 backdrop-blur-xl">
        <div className="header flex justify-around xl:w-[1000px] md:h-16 md:ml-auto md:mr-auto items-center mt-3">
          <IonRouterLink href="/" onClick={handleLogoClick}>
            <Logo/>
          </IonRouterLink>
          {children}
          <IonRouterLink href="/favorites" onClick={handleCartClick}>
            <Cart />
          </IonRouterLink>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};
