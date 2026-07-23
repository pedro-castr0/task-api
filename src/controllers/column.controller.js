const CreateColumnDTO = require("../dto/create-column.dto");
const UpdateColumnDTO = require("../dto/update-column.dto");
const columnService = require("../services/column.service");

class ColumnController {
  async create(req, res) {
    const dto = new CreateColumnDTO(req.body);
    const column = await columnService.create(dto);

    res.status(201).json(column);
  }

  async update(req, res) {
    const dto = new UpdateColumnDTO(req.body);
    await columnService.update(dto);

    res.status(201);
  }

  async delete(req, res) {
    const id = req.body.id;

    await columnService.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new ColumnController();
