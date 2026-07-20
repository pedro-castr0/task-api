const taskRepository = require("../repositories/task.repository");

class TaskService {
  async get(id) {
    return await taskRepository.get(id);
  }

  async getAll(column_id) {
    return await taskRepository.getAll(column_id);
  }

  async getAllByColumns(columns_ids) {
    return await taskRepository.getAllByColumns(columns_ids);
  }

  async create(create_dto) {
    return await taskRepository.create(create_dto);
  }

  async update(update_dto) {
    return await taskRepository.update(update_dto);
  }

  async delete(id) {
    return await taskRepository.delete(id);
  }
}

module.exports = new TaskService();
