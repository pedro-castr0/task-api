class UpdateColumnDTO {
  constructor(body) {
    this.id = body.id;
    this.board = body.board;
    this.name = body.name;
  }
}

module.exports = UpdateColumnDTO;
