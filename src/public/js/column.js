import { createColumn, updateColumn, deleteColumn } from "./api/column.js";
import { addColumn, removeColumn } from "./dom/column.js";

document.addEventListener("submit", async (event) => {
  const target = event.target;

  event.preventDefault();

  const data = Object.fromEntries(new FormData(target).entries());

  switch (true) {
    case target.matches('[id^="create-column-form"]'):
      const column = await createColumn(data);

      addColumn(column);
      break;

    case target.matches('[id^="update-column-form-"]'):
      updateColumn(data);
      break;

    case target.matches('[id^="delete-column-form-"]'):
      await deleteColumn(data);
      removeColumn(data.id);
      break;
  }
});
