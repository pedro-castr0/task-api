export function addTask(task) {
  const column = document.getElementById(`task-wrapper-${task.column}`);

  const html = `
        <div class="task" id="task-${task.id}">
            <form method="POST" id="update-task-form-${task.id}">
                <input type="hidden" name="id" value="${task.id}" />
                <input type="hidden" name="column" value="${task.column}" />

                <input
                class="subtitle"
                type="text"
                name="title"
                value="${task.title}"
                /><br />
                <textarea class="field" name="description">${task.description}</textarea
                ><br />

                <div class="actions">
                    <button type="submit">Update</button>
                </div>
            </form>

            <form method="POST" id="delete-task-form-${task.id}">
                <input type="hidden" name="id" value="${task.id}" />

                <div class="actions">
                    <button type="submit">Delete</button>
                </div>
            </form><br />
        </div>
    `;

  column.insertAdjacentHTML("beforeend", html);
}

export function removeTask(id) {
  const task = document.getElementById(`task-${id}`);
  task.remove();
}
