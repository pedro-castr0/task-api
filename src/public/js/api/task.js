import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";

export async function createTask(data) {
  const response = await axios.post("/task/create", data);

  return response.data;
}

export async function updateTask(data) {
  const response = await axios.put("/task/update", data);

  return response.data;
}

export async function deleteTask(data) {
  return await axios.delete("/task/delete", { data: data });
}
