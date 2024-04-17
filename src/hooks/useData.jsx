import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setDataLoading(true);
      const res = await fetch("/data/properties.json");
      const data = await res.json();
      setData(data);
      setDataLoading(false);
    };
    fetchData();
  }, []);
  return { data, dataLoading };
};

export default useData;
