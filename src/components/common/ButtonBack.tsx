import { IonIcon } from "@ionic/react";
import { returnUpBack } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router";

export const ButtonBack: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
     <IonIcon icon={returnUpBack} onClick={handleClick}
      className="text-4xl font-semibold cursor-pointer"/>
  );
};
