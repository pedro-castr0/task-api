const CreateColumnDTO = require("../dto/create-column.dto");
const UpdateColumnDTO = require("../dto/update-column.dto");
const columnService = require("../services/column.service");

class ColumnController {
  async create(req, res) {
    const dto = new CreateColumnDTO(req.body);
    const board_id = dto.board;
    await columnService.create(dto);

    res.redirect(`/board/${board_id}`);
  }

  async update(req, res) {
    const dto = new UpdateColumnDTO(req.body);
    const board_id = dto.board;
    await columnService.update(dto);

    res.redirect(`/board/${board_id}`);
  }

  async delete(req, res) {
    const column_id = req.body.id;
    const board_id = req.body.column;

    await columnService.delete(column_id);

    res.redirect(`/board/${board_id}`);
  }
}

module.exports = new ColumnController();
