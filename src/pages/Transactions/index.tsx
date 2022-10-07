import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { SearchForm } from "./components/SearchForm";

import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(Transaction => {
              return (
                <tr key={Transaction.id}>
                  <td width="50%">{Transaction.description}</td>
                  <td>
                    <PriceHighlight variant={Transaction.type}>
                      {Transaction.price}
                    </PriceHighlight>
                  </td>
                  <td>{Transaction.category}</td>
                  <td>{Transaction.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}