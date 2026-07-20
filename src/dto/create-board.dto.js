class CreateBoardDTO {
  constructor(body) {
    this.name = body.name;
    this.description = body.description;
    this.board = body.board;
  }
}

module.exports = CreateBoardDTO;
