const connect = require("../database/connection");

class BoardRepository {
  async get(id) {
    const client = await connect();
    const res = await client.query("SELECT * FROM board WHERE id = $1", [id]);

    return res.rows[0];
  }

  async getAll() {
    const client = await connect();
    const res = await client.query("SELECT * FROM board");

    return res.rows;
  }

  async create(dto) {
    const client = await connect();
    const sql =
      "INSERT INTO board(name, description) VALUES($1, $2) RETURNING id";
    const values = [dto.name, dto.description];
    const res = await client.query(sql, values);

    return res.rows[0].id;
  }

  async update(dto) {
    const client = await connect();
    const sql = "UPDATE board SET name = $1, description = $2 WHERE id = $3";
    const values = [dto.name, dto.description, dto.id];

    return await client.query(sql, values);
  }

  async delete(id) {
    const client = await connect();
    return await client.query("DELETE FROM board WHERE id = $1", [id]);
  }
}

module.exports = new BoardRepository();
