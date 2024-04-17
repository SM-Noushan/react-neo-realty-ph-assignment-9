import { toast } from "react-toastify";

// load data
export const getData = (userId) => {
  const data = localStorage.getItem(userId);
  if (data) return JSON.parse(data);
  return [];
};

// store data
export const saveData = (property, userId) => {
  const data = getData(userId);
  data.push(property);
  localStorage.setItem(userId, JSON.stringify(data));
  return toast.success("Successfully Bookmarked!");
};

// delete data
export const deleteData = (id, userId) => {
  const data = getData(userId);
  const remainingData = data.filter(
    (p) => p.id.toLowerCase() !== id.toLowerCase()
  );
  localStorage.setItem(userId, JSON.stringify(remainingData));
  return toast.success("Successfully Removed!");
};
