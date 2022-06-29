export const Transactions = ({ transactions }) => {
    return (<tbody>
        {transactions.map(el => {
            return <tr key={el.id}>
                <td>{el.type}</td>
                <td>{el.amount}</td>
                <td>{ el.currency}</td>
            </tr>
        })}
    </tbody>)
    // id = { transactions.id },
    //     type = { transactions.type },
    //     amout = { transactions.amount },
    //     currency = { transactions.currency },
};