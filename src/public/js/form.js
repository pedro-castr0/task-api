/* function showTaskForm(column_id) {
  const div = document.getElementById(`load-form-${column_id}`);
  const isOpen = div.classList.contains("open");

  closeAll();

  if (!isOpen) {
    div.classList.add("open");
  }
}

function showColumnForm() {
  const div = document.getElementById("load-column-form");
  const isOpen = div.classList.contains("open");

  if (!isOpen) {
    div.classList.add("open");
  } else {
    div.classList.remove("open");
  }
}

function closeAll() {
  document.querySelectorAll(".load-form").forEach((div) => {
    div.classList.remove("open");
  });
}

document.querySelectorAll(".task").forEach((task) => {
  task.addEventListener("focusin", () => {
    task.querySelectorAll(".actions").forEach((action) => {
      action.style.display = "block";
    });
  });

  task.addEventListener("focusout", () => {
    setTimeout(() => {
      if (!task.contains(document.activeElement)) {
        task.querySelectorAll(".actions").forEach((action) => {
          action.style.display = "none";
        });
      }
    }, 0);
  });
});
 */
