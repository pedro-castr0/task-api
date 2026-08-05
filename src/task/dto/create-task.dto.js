class CreateTaskDTO {
  constructor(body) {
    this.title = body.title;
    this.description = body.description;
    this.column = body.column;
  }
}

module.exports = CreateTaskDTO;
