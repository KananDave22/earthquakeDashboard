import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useStore } from "../../store/useStore";

export const ChartPanel = ({ data }) => {
  const { selectedId, setSelectedId, xAxis, yAxis } = useStore();

  const formatted = data.map((d) => ({
    ...d,
    fill: d.id === selectedId ? "#ef4444" : "#6366f1",
  }));

  return (
    <ScatterChart width={500} height={400}>
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey={xAxis} label ={{value: xAxis, position: "insideBottom", offset: -5}} />
      <YAxis dataKey={yAxis} label={{value: yAxis, angle: -90, position: "insideLeft"}}/>

      <Tooltip />

      <Scatter
        data={formatted}
        onClick={(e) => setSelectedId(e.id)}
      />
    </ScatterChart>
  );
};