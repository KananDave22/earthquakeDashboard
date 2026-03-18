import { useStore } from "../../store/useStore";

export const DataTable = ({ data }) => {
  const { selectedId, setSelectedId } = useStore();

  return (
    <div className="overflow-auto h-[500px] border rounded-lg">
      <table className="min-w-full text-xs">
        <thead className="sticky top-0 bg-gray-100">
          <tr>
            {Object.keys(data[0] || {}).map((key) => (
              <th key={key} className="px-2 py-1 border">
                {key}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className={`cursor-pointer ${
                selectedId === row.id ? "bg-indigo-100" : ""
              }`}
              onClick={() => setSelectedId(row.id)}
            >
              {Object.values(row).map((val, i) => (
                <td key={i} className="px-2 py-1 border">
                  {String(val)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};