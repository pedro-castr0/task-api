const taskService = require("../services/task.service");
const columnService = require("../services/column.service");
const CreateTaskDTO = require("../dto/create-task.dto");
const UpdateTaskDTO = require("../dto/update-task.dto");

class TaskController {
  async create(req, res) {
    const dto = new CreateTaskDTO(req.body);
    const board_id = await columnService.getBoardId(dto.column);
    await taskService.create(dto);

    res.redirect(`/board/${board_id}`);
  }

  async update(req, res) {
    const dto = new UpdateTaskDTO(req.body);
    const board_id = await columnService.getBoardId(dto.column);
    await taskService.update(dto);

    res.redirect(`/board/${board_id}`);
  }

  async delete(req, res) {
    const id = req.body.id;
    const column_id = req.body.column;
    const board_id = await columnService.getBoardId(column_id);
    await taskService.delete(id);

    res.redirect(`/board/${board_id}`);
  }
}

module.exports = new TaskController();
