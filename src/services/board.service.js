const boardRepository = require("../repositories/board.repository");

class BoardService {
  async get(id) {
    return await boardRepository.get(id);
  }

  async getAll() {
    return await boardRepository.getAll();
  }

  async create(dto) {
    return await boardRepository.create(dto);
  }

  async update(dto) {
    return await boardRepository.update(dto);
  }

  async delete(id) {
    return await boardRepository.delete(id);
  }
}

module.exports = new BoardService();
