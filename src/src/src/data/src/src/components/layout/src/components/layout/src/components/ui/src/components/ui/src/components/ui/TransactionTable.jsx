import { transactions } from "../../data/transactionData";

export default function TransactionTable() {
  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="mb-4 font-semibold">Transactions</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Date</th>
            <th className="border-b p-2">Type</th>
            <th className="border-b p-2">Amount</th>
            <th className="border-b p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td className="border-b p-2">{tx.date}</td>
              <td className="border-b p-2">{tx.type}</td>
              <td className="border-b p-2">{tx.amount}</td>
              <td className="border-b p-2">{tx.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
