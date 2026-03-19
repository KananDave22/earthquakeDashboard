import { useEarthquakeData } from "./hooks/useEarthquakeData";
import { ChartPanel } from "./components/chart/ChartPanel";
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

    <div className="p-6 space-y-6">

      <div className="bg-white shadow-sm p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Geographic Statistical Data: Visual Charts and Data Tables
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Interactive visualization and dataset exploration
        </p>
      </div>

      <div className="p-6 grid grid-cols-2 gap-6 h-screen">
      <Card title="Earthquake Chart">
        <AxisControls columns={columns} />
        <ChartPanel data={data} />
      </Card>

      <Card title="Earthquake Data">
        <DataTable data={data} />
      </Card>
    </div>
    </div>

    
  );
}

export default App;