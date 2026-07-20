class UpdateTaskDTO {
  constructor(body) {
    this.id = body.id;
    this.column = body.column;
    this.title = body.title;
    this.description = body.description;
  }
}

module.exports = UpdateTaskDTO;
