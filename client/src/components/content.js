import React from "react";
import { CarsList } from "./listsOfExistingData/CarsList";
import { ClientsList } from "./listsOfExistingData/ClientsList";
import { OperationsList } from "./listsOfExistingData/OperationsList";
import { Route, Switch } from "react-router-dom";
import { Description } from "./description";
import { RegisterCar } from "./registrationForms/RegisterCar";
import { RegisterClient } from "./registrationForms/RegisterClient";
import { RegisterOperation } from "./registrationForms/RegisterOperation";
import { GetDetails } from "./getAllInformations/getClientDetails";
import { GetCarDetails } from "./getAllInformations/getCarDetails";
import { GetOperationDetails } from "./getAllInformations/getOperationdetails";
import { useSelector } from "react-redux";

export const Content = () => {

  const target = useSelector(state => state.target.item);

  return (
    <div className="content">
      <div className="lists">
        <Switch>
          <Route path="/clients" component={ClientsList} />
          <Route path="/cars" component={CarsList} />
          <Route path="/operations" component={OperationsList} />
          <Route path="/registerClient" component={RegisterClient} />
          <Route path="/registerCar" component={RegisterCar} />
          <Route path="/registerOperation" component={RegisterOperation} />
          <Route exact path="/" component={Description} />
        </Switch>
      </div>
      <div className="detailedInfos">
        {Object.keys(target).length > 0 && <GetDetails target={target} />}
      </div>
    </div>
  );
};
