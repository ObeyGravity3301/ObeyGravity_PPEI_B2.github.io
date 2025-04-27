document.addEventListener("DOMContentLoaded", () => {
    const centerColumn = document.querySelector(".center-column");
    const middleColumn = document.querySelector(".middle-column");
    const rightColumn = document.querySelector(".right-column");
  
    // 中心框先移动
    setTimeout(() => {
      centerColumn.classList.add("moved");
    }, 500); // 0.5s 后开始移动中心框
  
    // 中间框随后移动
    setTimeout(() => {
      middleColumn.classList.add("moved");
    }, 800); // 0.8s 后开始移动中间框
  
    // 右边框最后移动
    setTimeout(() => {
      rightColumn.classList.add("moved");
    }, 1100); // 1.1s 后开始移动右边框
  });