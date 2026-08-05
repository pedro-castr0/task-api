class CreateColumnDTO {
  constructor(body) {
    this.name = body.name;
    this.board = body.board;
  }
}

module.exports = CreateColumnDTO;
