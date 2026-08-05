const boardService = require("./board.service");
const columnService = require("../column/column.service");
const taskService = require("../task/task.service");
const CreateBoardDTO = require("./dto/create-board.dto");
const UpdateBoardDTO = require("./dto/update-board.dto");

class BoardController {
  async create(req, res) {
    const dto = new CreateBoardDTO(req.body);
    const board = await boardService.create(dto);

    res.status(201).json(board);
  }

  async read(req, res) {
    const id = req.params.id;
    const board = await boardService.get(id);
    const columns = await columnService.getAll(id);
    const columns_ids = [];

    columns.forEach((column) => {
      columns_ids.push(column.id);
    });

    const tasks = await taskService.getAllByColumns(columns_ids);

    res.render("board/view", {
      board: board,
      columns: columns,
      tasks: tasks,
    });
  }

  async update(req, res) {
    const dto = new UpdateBoardDTO(req.body);
    await boardService.update(dto);

    res.sendStatus(201);
  }

  async delete(req, res) {
    const id = req.body.id;
    await boardService.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new BoardController();
