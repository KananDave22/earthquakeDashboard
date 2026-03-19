import { useEffect, useState } from "react";
import Papa from "papaparse";

export const useEarthquakeData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv"
      );

      const text = await res.text();

      const parsed = Papa.parse(text, {
        header: true,    // ensuriing that the header also is parsed
        dynamicTyping: true, // To ensure that it converts the string to the numeric values 
      });

      const cleaned = parsed.data.filter((d) => d.id && d.mag);

      setData(cleaned);
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};