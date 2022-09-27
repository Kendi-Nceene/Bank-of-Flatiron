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

<<<<<<< HEAD
export default Transaction;
=======

export default TransactionsList;
>>>>>>> c9ffbb87e3a394edc9a9a7f535565caa95bd2262
