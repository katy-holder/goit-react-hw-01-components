import { Transactions } from "./Transactions.jsx";
import transactions from "../../mock/transactions.json";
import { TransactionTableUI, TransactionRow } from "ui/Transactions";

export const TransactionHistory = () => {
  return (
        <TransactionTableUI className="transaction-history">
  <thead>
    <TransactionRow>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TransactionRow>
  </thead>
        <Transactions transactions={transactions} />
</TransactionTableUI>
    )
}