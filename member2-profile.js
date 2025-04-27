document.addEventListener("DOMContentLoaded", () => {
    const centerColumn = document.querySelector(".center-column");
    const middleColumn = document.querySelector(".middle-column");
    const rightColumn = document.querySelector(".right-column");
  
    setTimeout(() => {
      centerColumn.classList.add("moved");
    }, 500);
    setTimeout(() => {
      middleColumn.classList.add("moved");
    }, 800);
    setTimeout(() => {
      rightColumn.classList.add("moved");
    }, 1100);
  });