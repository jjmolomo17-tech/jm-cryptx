import { chartPath } from "../../data/chartStaticData";

export default function ChartVisual() {
  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="mb-4 font-semibold">BTC Price Visual</h3>
      <svg viewBox="0 0 200 200" className="w-full h-40">
        <path d={chartPath} fill="none" stroke="blue" strokeWidth="2" />
      </svg>
    </div>
  );
}
