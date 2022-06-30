import { Transactions } from "./Transactions.jsx";
import transactions from "../../mock/transactions.json";
import styled from "styled-components";
import { TableRow } from "./TableRow.styled.js"

export const TransactionTableUI = styled.table`
    border-collapse: collapse;
    display: column;
    align-items: center;
    box-shadow: 18px -13px 47px -18px rgba(66, 68, 90, 1);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TableHeader =styled.th`
  border: 1px solid black;
  height: 30px;
  background-color: #8d8dc2;
`


export const TransactionHistory = () => {
  return (
    <Container>
        <TransactionTableUI className="transaction-history">
  <thead>
    <TableRow>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </TableRow>
  </thead>
        <Transactions transactions={transactions} />
    </TransactionTableUI>
    </Container>
    )
}