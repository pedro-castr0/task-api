export function addBoard(board) {
  const boardWrapper = document.getElementById("board-wrapper");
  const html = `
        <div id="board-${board.id}">
            <form method="post" id="update-board-form-${board.id}">
                <input type="hidden" name="id" value="${board.id}" />
                <input
                    class="page-title"
                    type="text"
                    name="name"
                    value="${board.name}"
                /><br />
                <textarea name="description">${board.description}</textarea><br />

                <button class="actions" type="submit">Update</button>
            </form>

            <form method="post" id="delete-board-form-${board.id}">
                <input type="hidden" name="id" value="${board.id}" />
                
                <button class="actions" type="submit">Delete</button>
            </form>

            <p><a href="/board/${board.id}">Access</a></p>
        </div>
    `;

  boardWrapper.insertAdjacentHTML("beforeend", html);
}

export function updateBoardTitle(value) {
  if (window.location.pathname != "/") {
    document.title = `Board | ${value}`;
  }
}

export function removeBoard(id) {
  const board = document.getElementById(`board-${id}`);

  board.remove();
}
