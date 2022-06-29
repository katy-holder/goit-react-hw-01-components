import { Transactions } from "./Transactions";
import transactionsData from "./transactions.json";

export const TransactionHistory = () => {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <Transactions transactions={transactionsData} />
</table>
    )
}