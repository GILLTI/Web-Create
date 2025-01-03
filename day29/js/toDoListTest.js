document.addEventListener("DOMContentLoaded", () => {
  const addItemButton = document.getElementById("add-item");
  const newItemInput = document.getElementById("new-item");
  const todoList = document.getElementById("todo-items");

  // Add new item
  addItemButton.addEventListener("click", () => {
    const newItemText = newItemInput.value.trim();

    if (newItemText === "") {
      alert("할 일을 입력하세요!");
      return;
    }

    const newItem = document.createElement("li");
    newItem.innerHTML = `${newItemText} <button class="delete">삭제</button>`;
    todoList.appendChild(newItem);

    newItemInput.value = "";
    attachDeleteEvent(newItem.querySelector(".delete"));
  });

  // Attach delete event to existing buttons
  const attachDeleteEvent = (deleteButton) => {
    deleteButton.addEventListener("click", () => {
      const itemToDe lete = deleteButton.parentElement;
      todoList.removeChild(itemToDelete);
    });
  };

  // Attach delete event to initial items
  document.querySelectorAll(".delete").forEach(attachDeleteEvent);
});