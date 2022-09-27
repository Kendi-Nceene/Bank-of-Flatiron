import React from "react";
import Transaction from "./Transaction";
import Select from "./Select"

function Transaction({date, description, category, amount}) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}


export default TransactionsList;
