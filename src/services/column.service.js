const columnRepository = require("../repositories/column.repository");

class ColumnService {
  async get(id) {
    return await columnRepository.get(id);
  }

  async getAll(board_id) {
    return await columnRepository.getAll(board_id);
  }

  async getBoardId(id) {
    return await columnRepository.getBoardId(id);
  }

  async create(dto) {
    return await columnRepository.create(dto);
  }

  async update(dto) {
    return await columnRepository.update(dto);
  }

  async delete(id) {
    return await columnRepository.delete(id);
  }
}

module.exports = new ColumnService();
