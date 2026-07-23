import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";

export async function createColumn(data) {
  const response = await axios.post("/column/create", data);

  return response.data;
}

export async function updateColumn(data) {
  const response = await axios.put("/column/update", data);

  return response.data;
}

export async function deleteColumn(data) {
  return await axios.delete("/column/delete", { data: data });
}
