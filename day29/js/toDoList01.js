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
    }}
  });