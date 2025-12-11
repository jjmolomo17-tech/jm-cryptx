export default function MetricCard({ label, value }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="text-gray-500">{label}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
