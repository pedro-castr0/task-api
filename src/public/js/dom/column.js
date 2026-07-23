export function addColumn(column) {
  const board = document.getElementById("column-wrapper");

  const html = `
    <div id="column-${column.id}">
      <form
          action="/column/update"
          method="POST"
          id="update-column-form-${column.id}"
      >
          <input type="hidden" name="id" value="${column.id}" />
          <input class="title" type="text" name="name" value="${column.name}" /><br />

          <button class="actions" type="submit">Update</button>
      </form>
      <form
          action="/column/delete"
          method="POST"
          id="delete-column-form-${column.id}"
      >
          <input type="hidden" name="id" value="${column.id}" />

          <button class="actions" type="submit">Delete</button>
      </form><br />

      <div id="task-wrapper-${column.id}"></div>

      <div class="load-form" id="load-form-<%= column.id %>">
        <p>Add Task</p>
      
        <form method="post" id="create-task-form-${column.id}">
          <input type="hidden" name="column" value="${column.id}" />
          <label for="title">Task title:</label><br />
          <input type="text" name="title" /><br />
          <label for="title">Task description:</label><br />
          <textarea name="description"></textarea><br />

          <button type="submit">Add</button>
        </form>

        <button onclick="">Cancel</button>
      </div><br />
    </div>
    `;

  board.insertAdjacentHTML("beforeend", html);
}

export function removeColumn(id) {
  const column = document.getElementById(`column-${id}`);

  column.remove();
}
