import { createTask, deleteTask, updateTask } from "./api/task.js";
import { addTask, removeTask } from "./dom/task.js";

document.addEventListener("submit", async (event) => {
  const target = event.target;

  event.preventDefault();

  const data = Object.fromEntries(new FormData(target).entries());

  switch (true) {
    case target.matches('[id^="update-task-form-"]'):
      await updateTask(data);
      break;

    case target.matches('[id^="delete-task-form-"]'):
      await deleteTask(data);

      removeTask(data.id);
      break;

    case target.matches('[id^="create-task-form"]'):
      const task = await createTask(data);

      addTask(task);
      break;
  }
});
