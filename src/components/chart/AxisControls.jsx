import { useStore } from "../../store/useStore";

export const AxisControls = ({ columns }) => {
  const { xAxis, yAxis, setAxis } = useStore();

  return (
    <div className="flex gap-3 mb-3">
      <div className="flex justify-content items-center gap-2">
        <label className="block text-sm font-medium">X-Axis: </label>
        <select
          value={xAxis}
          onChange={(e) => setAxis(e.target.value, yAxis)}
          className="border px-2 py-1 rounded"
        >
          {/* Creating a list of option from whihc the user can choose the values that it wants to set  */}
          {columns.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-content items-center gap-2">
        <label className="block text-sm font-medium">Y-Axis: </label>
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
      
    </div>
  );
};
