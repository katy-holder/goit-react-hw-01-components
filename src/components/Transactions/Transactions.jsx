import styled from "styled-components";
import { TableRow } from "./TableRow.styled.js"


const TableText = styled.td`
    border: 2px solid black;
    width: 150px;
    padding: 5px;
    margin: 5px;
`;

export const Transactions = ({ transactions }) => {
    return (<tbody>
        {transactions.map(el => {
            return <TableRow key={el.id}>
                <TableText>{el.type}</TableText>
                <TableText>{el.amount}</TableText>
                <TableText>{ el.currency}</TableText>
            </TableRow>
        })}
    </tbody>)
};