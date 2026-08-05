const connect = require("../database/connection");

class TaskRepository {
  async get(id) {
    const client = await connect();
    const res = await client.query("SELECT * FROM task WHERE id = $1", [id]);

    return res.rows[0];
  }

  async getAll(column_id) {
    const client = await connect();
    const res = await client.query(
      'SELECT * FROM task WHERE "column" = $1 ORDER BY id',
      [column_id],
    );

    return res.rows;
  }

  async getAllByColumns(columns_ids) {
    const client = await connect();
    const res = await client.query(
      'SELECT * FROM task WHERE "column" = ANY($1) ORDER BY id',
      [columns_ids],
    );

    return res.rows;
  }

  async create(create_dto) {
    const client = await connect();
    const sql =
      'INSERT INTO task(title, description, "column") VALUES($1, $2, $3) RETURNING id, title, description, "column"';
    const values = [
      create_dto.title,
      create_dto.description,
      create_dto.column,
    ];
    const res = await client.query(sql, values);

    return res.rows[0];
  }

  async update(update_dto) {
    const client = await connect();
    const sql = "UPDATE task SET title = $1, description = $2 WHERE id = $3";
    const values = [update_dto.title, update_dto.description, update_dto.id];

    return await client.query(sql, values);
  }

  async delete(id) {
    const client = await connect();

    return await client.query("DELETE FROM task WHERE id = $1", [id]);
  }
}

module.exports = new TaskRepository();
