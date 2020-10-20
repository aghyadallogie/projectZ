import React from "react";
import { useSelector } from "react-redux";

export const GetDetails = ({ target }) => {
  // const { firstname, lastname, birthdate, address, email } = target;

  const handleTargetObject = target => {
    let results = [];
    for (const [key, value] of Object.entries(target)) {
      results.push(<li>{key}: {value}</li>);
    }
    return results;
  }

  return (
    <ul className="targetsInfos">
      {handleTargetObject(target)}
    </ul>
  );
};
