import { toast } from "react-toastify";

// load data
export const getData = () => {
  const data = localStorage.getItem("data");
  if (data) return JSON.parse(data);
  return [];
};

// store data
export const saveData = (property) => {
  const data = getData();
  data.push(property);
  localStorage.setItem("data", JSON.stringify(data));
  return toast.success("Successfully Bookmarked!");
};

// delete data
export const deleteData = (id) => {
  const data = getData();
  const remainingData = data.filter(
    (p) => p.id.toLowerCase() !== id.toLowerCase()
  );
  localStorage.setItem("data", JSON.stringify(remainingData));
  return toast.success("Successfully Removed!");
};
