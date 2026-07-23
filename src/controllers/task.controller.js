const taskService = require("../services/task.service");
const columnService = require("../services/column.service");
const CreateTaskDTO = require("../dto/create-task.dto");
const UpdateTaskDTO = require("../dto/update-task.dto");

class TaskController {
  async create(req, res) {
    const dto = new CreateTaskDTO(req.body);
    const task = await taskService.create(dto);

    res.status(201).json(task);
  }

  async update(req, res) {
    const dto = new UpdateTaskDTO(req.body);
    const task = await taskService.update(dto);

    res.status(201).json(task);
  }

  async delete(req, res) {
    const id = req.body.id;
    await taskService.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new TaskController();
