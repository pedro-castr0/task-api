class UpdateBoardDTO {
  constructor(body) {
    this.id = body.id;
    this.name = body.name;
    this.description = body.description;
  }
}

module.exports = UpdateBoardDTO;
