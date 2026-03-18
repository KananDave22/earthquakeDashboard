import { useEarthquakeData } from "./hooks/useEarthquakeData";
import { ChartPanel } from "./components/chart/chartPanel";
import { DataTable } from "./components/table/DataTable";
import { Card } from "./components/UI/card";
import { Loader } from "./components/UI/loader";
import { AxisControls } from "./components/chart/AxisControls";

function App() {
  const { data, loading, error, refetch } = useEarthquakeData();

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="p-6">
        <p>{error}</p>
        <button onClick={refetch}>Retry</button>
      </div>
    );
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="p-6 grid grid-cols-2 gap-6 h-screen">
      <Card title="Earthquake Chart">
        <AxisControls columns={columns} />
        <ChartPanel data={data} />
      </Card>

      <Card title="Earthquake Data">
        <DataTable data={data} />
      </Card>
    </div>
  );
}

export default App;