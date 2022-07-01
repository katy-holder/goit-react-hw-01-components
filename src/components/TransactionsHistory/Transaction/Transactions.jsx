import styled from "styled-components";


const TableText = styled.td`
    border: 2px solid black;
    width: 150px;
    padding: 5px;
`;

export const TableBody = styled.tbody`
tr:nth-child(even) {
    background-color: ${p => p.theme.colors.bgColorTransaction}
    };
`;

const TableRow = styled.tr`
    text-align: center;
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