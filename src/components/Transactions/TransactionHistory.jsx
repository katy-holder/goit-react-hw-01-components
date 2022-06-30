import { Transactions } from "./Transactions.jsx";
import transactions from "../../mock/transactions.json";
import styled from "styled-components";
import { TableRow } from "./TableRow.styled.js"

export const TransactionTableUI = styled.table`
    border-collapse: collapse;
    display: column;
    align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


export const TransactionHistory = () => {
  return (
    <Container>
        <TransactionTableUI className="transaction-history">
  <thead>
    <TableRow>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TableRow>
  </thead>
        <Transactions transactions={transactions} />
    </TransactionTableUI>
    </Container>
    )
}