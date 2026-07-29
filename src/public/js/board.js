import { createBoard, updateBoard, deleteBoard } from "./api/board.js";
import { addBoard, removeBoard, updateBoardTitle } from "./dom/board.js";

document.addEventListener("submit", async (event) => {
  const target = event.target;

  event.preventDefault();

  const data = Object.fromEntries(new FormData(target).entries());

  switch (true) {
    case target.matches('[id^="create-board-form"]'):
      const board = await createBoard(data);

      addBoard(board);
      break;

    case target.matches('[id^="update-board-form-"]'):
      await updateBoard(data);
      updateBoardTitle(data.name);
      break;

    case target.matches('[id^="delete-board-form-"]'):
      await deleteBoard(data);
      removeBoard(data.id);
      break;
  }
});
