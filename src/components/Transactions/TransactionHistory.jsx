import { Transactions } from "./Transactions.jsx";
import transactionsData from "./transactions.json";
import { TransactionTableUI, TransactionRow } from "ui/Transactions";

// const TransactionTableUI = styled.table`
//     border-collapse: collapse;
// `;

export const TransactionHistory = () => {
  return (
        <TransactionTableUI class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <Transactions transactions={transactionsData} />
</TransactionTableUI>
    )
}