import styled from "styled-components";

const TableBody = styled.tbody`

`;

const TableRow = styled.tr`
    border: 2px solid black;
`;

const TableText = styled.td`
    border: 2px solid black;
`;

export const Transactions = ({ transactions }) => {
    return (<TableBody>
        {transactions.map(el => {
            return <TableRow key={el.id}>
                <TableText>{el.type}</TableText>
                <TableText>{el.amount}</TableText>
                <TableText>{ el.currency}</TableText>
            </TableRow>
        })}
    </TableBody>)
};