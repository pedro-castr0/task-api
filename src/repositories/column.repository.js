const connect = require("../database/connection");

class ColumnRepository {
  async get(id) {
    const client = await connect();
    const res = await client.query('SELECT * FROM "column" WHERE id = $1', [
      id,
    ]);

    return res.rows[0];
  }

  async getAll(board_id) {
    const client = await connect();
    const res = await client.query('SELECT * FROM "column" WHERE board = $1', [
      board_id,
    ]);

    return res.rows;
  }

  async getBoardId(id) {
    const client = await connect();
    const res = await client.query('SELECT board FROM "column" WHERE id = $1', [
      id,
    ]);

    return res.rows[0].board;
  }

  async create(dto) {
    const client = await connect();
    const sql = 'INSERT INTO "column"(name, board) VALUES($1, $2)';
    const values = [dto.name, dto.board];

    return await client.query(sql, values);
  }

  async update(dto) {
    const client = await connect();
    const sql = 'UPDATE "column" SET name = $1 WHERE id = $2';
    const values = [dto.name, dto.id];

    return await client.query(sql, values);
  }

  async delete(id) {
    const client = await connect();
    return await client.query('DELETE FROM "column" WHERE id = $1', [id]);
  }
}

module.exports = new ColumnRepository();
