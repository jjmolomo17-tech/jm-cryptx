import MetricCard from "../ui/MetricCard";
import ChartVisual from "../ui/ChartVisual";
import TransactionTable from "../ui/TransactionTable";

export default function MainContent() {
  return (
    <main className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard label="Total Profit" value="$12,500" />
        <MetricCard label="Market Cap" value="$1.2M" />
        <MetricCard label="BTC Holdings" value="2.5 BTC" />
      </div>
      <ChartVisual />
      <TransactionTable />
    </main>
  );
}
