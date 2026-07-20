const boardService = require("../services/board.service");
const columnService = require("../services/column.service");
const taskService = require("../services/task.service");
const CreateBoardDTO = require("../dto/create-board.dto");
const UpdateBoardDTO = require("../dto/update-board.dto");

class BoardController {
  async create(req, res) {
    const dto = new CreateBoardDTO(req.body);
    const id = await boardService.create(dto);

    res.redirect(`/board/${id}`);
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
    const id = dto.id;
    await boardService.update(dto);

    res.redirect(`/board/${id}`);
  }

  async delete(req, res) {
    const id = req.body.id;
    await boardService.delete(id);

    res.redirect("/");
  }

  async createForm(req, res) {
    res.render("board/create-form");
  }
}

module.exports = new BoardController();
