import axios from "https://cdn.jsdelivr.net/npm/axios@1.11.0/+esm";

export async function createBoard(data) {
  const response = await axios.post("/board/create", data);

  return response.data;
}

export async function updateBoard(data) {
  return await axios.put("/board/update", data);
}

export async function deleteBoard(data) {
  return await axios.delete("/board/delete", { data: data });
}
