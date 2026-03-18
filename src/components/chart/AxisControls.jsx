import { useStore } from "../../store/useStore";

export const AxisControls = ({ columns }) => {
  const { xAxis, yAxis, setAxis } = useStore();

  return (
    <div className="flex gap-3 mb-3">
      <select
        value={xAxis}
        onChange={(e) => setAxis(e.target.value, yAxis)}
        className="border px-2 py-1 rounded"
      >
        {columns.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        value={yAxis}
        onChange={(e) => setAxis(xAxis, e.target.value)}
        className="border px-2 py-1 rounded"
      >
        {columns.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
    </div>
  );
};